import { db } from "@/db";
import { desc, eq } from "drizzle-orm";
import { users, comment } from "@/db/schema";
import { cache } from "react";

type Comment = typeof comment.$inferSelect;
type User = typeof users.$inferSelect;

export type CommentWithRelations = Comment & {
  user?: User;
};

export const getComments = cache(
  (postId: string): Promise<CommentWithRelations[]> => {
    const comments = db.query.comment.findMany({
      where: eq(comment.postId, postId),
      with: {
        user: true,
      },
      orderBy: desc(comment.createdAt),
    });
    return comments;
  }
);
