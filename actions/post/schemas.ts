import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().min(1, "标题不能为空"),
  content: z.string().min(6, "内容不能少于6个字符"),
  topicId: z.string().min(1, "请选择一个话题"),
});

export type CreatePostSchemaType = z.infer<typeof createPostSchema>;
