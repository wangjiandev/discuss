"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { post } from "@/db/schema";
import { createPostSchema } from "@/actions/post/schemas";
import { revalidatePath } from "next/cache";

type NewPost = typeof post.$inferInsert;
type Post = typeof post.$inferSelect;

export type CreatePostActionState = {
  form?: {
    title?: string;
    content?: string;
  };
  errors?: {
    title?: string[];
    content?: string[];
  };
  message?: string;
  success?: boolean;
};

export const createPost = async (
  _state: CreatePostActionState,
  formData: FormData
): Promise<CreatePostActionState> => {
  const validatedFields = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    topicId: formData.get("topicId"),
  });

  console.log(validatedFields);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const session = await auth();
  if (!session?.user) {
    return {
      message: "Unauthorized",
    };
  }
  // Mutate data
  const { title, content, topicId } = validatedFields.data;
  const newPost: NewPost = {
    title: title,
    content: content,
    topicId: topicId,
    userId: session.user.id!,
  };
  try {
    await db.insert(post).values(newPost).returning();
    revalidatePath(`/topic/${topicId}`);
    return {
      success: true,
      message: "Post created successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Post creation failed",
    };
  }
};
