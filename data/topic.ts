import { db } from "@/db";

export const getTopics = async () => {
  const topics = await db.query.topic.findMany({
    with: {
      user: true,
      posts: true,
    },
  });
  return topics;
};
