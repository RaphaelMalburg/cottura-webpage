import { z } from "zod";

export const contactForm = z.object({
  name: z.string().min(3, {
    message: "Nome deve conter ao menos 3 letras.",
  }),
  email: z.string().email({
    message: "Email inválido.",
  }),

  message: z.string().min(10, {
    message: "Mensagem deve conter ao menos 10 letras.",
  }),
});
