import { z } from "zod";

export const contactSchema = z
  .object({
    Name: z.string().trim().nonempty(),
    Email: z.string().trim().email().nonempty(),
    Message: z.string().trim().max(1000).nonempty(),
  })
  .strict()
  .required();
export type ContactSchemaType = z.infer<typeof contactSchema>;
