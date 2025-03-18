import { z } from "zod";

export const createCommentSchema = z.object({
  content: z.string().min(1, "内容不能为空"),
});

export type CreateCommentSchemaType = z.infer<typeof createCommentSchema>;
