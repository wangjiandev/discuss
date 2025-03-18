import { db } from "@/db";
import { desc, eq } from "drizzle-orm";
import { post, users, comment } from "@/db/schema";

type Post = typeof post.$inferSelect;
type User = typeof users.$inferSelect;
type Comment = typeof comment.$inferSelect;

export type PostWithRelations = Post & {
  user?: User;
  comments?: Comment[];
};

export const getPosts = async (
  topicId: string
): Promise<PostWithRelations[]> => {
  const posts = await db.query.post.findMany({
    where: eq(post.topicId, topicId),
    with: {
      user: true,
      comments: true,
    },
  });
  return posts;
};

export const getTop5Posts = async (): Promise<PostWithRelations[]> => {
  const posts = await db.query.post.findMany({
    with: {
      user: true,
      comments: true,
    },
    orderBy: desc(post.createdAt),
    limit: 5,
  });
  return posts;
};

export const getPost = async (postId: string): Promise<PostWithRelations> => {
  const postEntity = await db.query.post.findFirst({
    with: {
      user: true,
      comments: true,
    },
    where: eq(post.id, postId),
  });
  if (!postEntity) {
    throw new Error("Post not found");
  }

  return postEntity;
};
