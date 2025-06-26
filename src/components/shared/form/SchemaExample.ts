// replace it on schemas/someSchema.ts

import { z } from "zod";

const NAME_VALIDATION = "Ім'я має бути від 2 до 100 символів";
const EMAIL_VALIDATION = "Некоректний формат пошти";
const MESSAGE_VALIDATION = "Повідомлення має біти не більше за 1000 символів";

export const SomeSchema = z.object({
  name: z.string().min(2, NAME_VALIDATION).max(100, NAME_VALIDATION),
  email: z.string().email(EMAIL_VALIDATION),
  message: z.string().max(1000, MESSAGE_VALIDATION).optional(),
});

export type SomeData = z.infer<typeof SomeSchema>;
