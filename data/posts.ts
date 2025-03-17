import { db } from "@/db";
import { eq } from "drizzle-orm";
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
