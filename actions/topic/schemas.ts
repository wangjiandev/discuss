import { z } from "zod";

export const createTopicSchema = z.object({
  name: z.string().min(1, "主题名称不能为空"),
  description: z.string().min(6, "主题描述不能少于6个字符"),
});
