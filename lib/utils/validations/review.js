import { z } from "zod";

export const reviewValidation = z.object({
  review: z
    .number({ required_error: "Rewiew is required" })
    .min(1, "Rewiew is required"),
  reviewText: z
    .string({ required_error: "Please write something!" })
    .min(1, "Please write something!")
    .max(200, "200 is the maximum length of review"),
});
