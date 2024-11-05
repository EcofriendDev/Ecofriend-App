import { z } from "zod";

export const envService = z
  .object({
    EXPO_PUBLIC_NEWS_API: z.string(),
  })
  .parse({ EXPO_PUBLIC_NEWS_API: process.env.EXPO_PUBLIC_NEWS_API });
