import { z } from "zod";

export const contactSchema = z
  .object({
    Name: z
      .string()
      .trim()
      .max(150, { message: "⚠️ Name can be at most 150 characters long." })
      .nonempty({ message: "⚠️ Name must be non-empty." }),
    Email: z
      .string()
      .trim()
      .email({ message: "⚠️ Email must be valid." })
      .nonempty({ message: "⚠️ Email must be non-empty." }),
    Message: z
      .string()
      .trim()
      .max(1000, { message: "⚠️ Message can be at most 1000 characters long." })
      .nonempty({ message: "⚠️ Message must be non-empty." }),
  })
  .strict()
  .required();
export type ContactSchemaType = z.infer<typeof contactSchema>;
