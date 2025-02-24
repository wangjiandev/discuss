"use server";

import { auth } from "@/auth";
import { createTopicSchema } from "./schemas";
import { db, topic } from "@/db/schema";
import { redirect } from "next/navigation";

type NewTopic = typeof topic.$inferInsert;

export const createTopic = async (formData: FormData) => {
  const validatedFields = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const session = await auth();
  if (!session?.user) {
    return {
      errors: "Unauthorized",
    };
  }
  // Mutate data
  const { name, description } = validatedFields.data;
  const newTopic: NewTopic = {
    name: name,
    description: description,
    userId: session.user.id!,
  };
  let result;
  try {
    result = await db.insert(topic).values(newTopic).returning();
  } catch (error) {
    console.error(error);
    return {
      data: null,
      errors: "Topic creation failed",
    };
  }
  redirect(`/admin/content/topics/${result[0].id}`);
};
