// src/content/config.ts
import { defineCollection, z } from "astro:content";

const devlog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.union([z.string(), z.date()]).optional(),
  }),
});

export const collections = {
  devlog,
};
