import { z } from "zod";

export const newsletterForm = z.object({
  email: z.string().email({
    message: "Email inválido.",
  }),
});
