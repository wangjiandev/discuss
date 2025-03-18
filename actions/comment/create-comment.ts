"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { comment, post } from "@/db/schema";
import { createCommentSchema } from "@/actions/comment/schemas";
import { revalidatePath } from "next/cache";

type NewComment = typeof comment.$inferInsert;

export type CreateCommentActionState = {
  form?: {
    content?: string;
  };
  errors?: {
    content?: string[];
  };
  message?: string;
  success?: boolean;
};

export const createComment = async (
  { postId, parentId }: { postId: string; parentId?: string },
  _state: CreateCommentActionState,
  formData: FormData
): Promise<CreateCommentActionState> => {
  const validatedFields = createCommentSchema.safeParse({
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const session = await auth();
  if (!session?.user) {
    return {
      message: "Unauthorized",
    };
  }
  const { content } = validatedFields.data;
  const newComment: NewComment = {
    content: content,
    postId: postId,
    userId: session.user.id!,
    parentId,
  };
  try {
    await db.insert(comment).values(newComment).returning();
    revalidatePath(`/admin/content/topics/[topicId]/posts/[postId]`, "page");
    return {
      success: true,
      message: "评论创建成功",
    };
  } catch (error) {
    console.error(error);
    return {
      message: "评论创建失败",
    };
  }
};
