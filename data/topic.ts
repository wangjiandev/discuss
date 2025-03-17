import { db } from "@/db";
import { topic } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getTopics = async () => {
  const topics = await db.query.topic.findMany({
    with: {
      user: true,
      posts: true,
    },
  });
  return topics;
};

export const getTopic = async (id: string) => {
  const topicEntity = await db.query.topic.findFirst({
    where: eq(topic.id, id),
    with: {
      user: true,
      posts: true,
    },
  });
  if (!topicEntity) {
    throw new Error("Topic not found");
  }
  return topicEntity;
};
