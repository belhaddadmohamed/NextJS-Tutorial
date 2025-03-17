import { z } from "zod";

export const createArticleSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is Should be String",
    })
    .min(2, {message: "Title must be more than 2 characters"})
    .max(200),

  description: z
    .string()
    .min(10)
    .max(500, "Please less than 500 chars in description"),
});
