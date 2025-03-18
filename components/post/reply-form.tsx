"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { CreateCommentSchemaType } from "@/actions/comment/schemas";
import { createCommentSchema } from "@/actions/comment/schemas";
import { startTransition, useActionState, useEffect, useState } from "react";
import { createComment } from "@/actions/comment/create-comment";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { MessageSquare, SquareX } from "lucide-react";

interface ReplyFormProps {
  postId: string;
  isShow?: boolean;
  parentId?: string;
}

const ReplyForm = ({ postId, isShow = false, parentId }: ReplyFormProps) => {
  const [isOpen, setIsOpen] = useState(isShow);
  const [state, formAction, isPending] = useActionState(
    createComment.bind(null, { postId, parentId }),
    {}
  );

  const form = useForm<CreateCommentSchemaType>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: CreateCommentSchemaType) {
    const formData = new FormData();
    formData.append("content", values.content);
    startTransition(() => formAction(formData));
  }

  useEffect(() => {
    if (state.success) {
      state.success = undefined;
      form.reset();
    }
  }, [state.success, form]);

  return (
    <div className="flex flex-col gap-2">
      <Button variant="icons" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <SquareX className="w-4 h-4 text-red-500" />
        ) : (
          <MessageSquare className="w-4 h-4" />
        )}
      </Button>
      {isOpen && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="enter your reply here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton isPending={isPending} />
          </form>
        </Form>
      )}
    </div>
  );
};

export default ReplyForm;
