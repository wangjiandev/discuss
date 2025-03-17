"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import { CreatePostSchemaType, createPostSchema } from "@/actions/post/schemas";
import { startTransition, useActionState, useState } from "react";
import { createPost } from "@/actions/post/create-post";

interface CreatePostFormProps {
  topicId: string;
}

const CreatePostForm = ({ topicId }: CreatePostFormProps) => {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(createPost, {});
  const form = useForm<CreatePostSchemaType>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      content: "",
      topicId: topicId,
    },
  });

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      form.reset();
    }
    setOpen(open);
  };

  const handleSubmit = (data: CreatePostSchemaType) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("topicId", topicId);
    startTransition(() => formAction(formData));
    handleOpenChange(false);
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button size="sm" className="w-full">
          Create New Post
        </Button>
      </PopoverTrigger>
      <PopoverAnchor>
        <PopoverContent side="bottom" align="start" className="w-96">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <Separator />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-2"
              >
                <input type="hidden" name="topicId" value={topicId} />
                <FormField
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Content" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Create</Button>
              </form>
            </Form>
          </div>
        </PopoverContent>
      </PopoverAnchor>
    </Popover>
  );
};

export default CreatePostForm;
