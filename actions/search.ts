"use server";
import { redirect } from "next/navigation";

export const searchAction = async (formData: FormData) => {
  const query = formData.get("query");
  redirect(`/admin/content/search?query=${query}`);
};
