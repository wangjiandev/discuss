"use server";

import { createTopicSchema } from "./schemas";

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

  await new Promise((resolve) => setTimeout(resolve, 5000));

  // Mutate data
  const { name, description } = validatedFields.data;
  console.log("action: db install", name, description);

  return {
    errors: "Topic created failed",
  };
};
