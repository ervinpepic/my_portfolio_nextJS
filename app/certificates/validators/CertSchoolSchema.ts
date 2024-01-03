import { z } from "zod";

export const CertificateSchema = z.object({
  schoolName: z
    .string()
    .min(3, {
      message: "School name is required, and must be more than 3 chars length.",
    }),
  certificates: z.array(
    z.object({
      title: z
        .string()
        .min(3, {
          message: "Title is required and must be more than 3 chars length.",
        }),
      subtitle: z
        .string()
        .min(3, {
          message: "Subtitle is required and must be more than 3 chars length.",
        }),
      description: z.string().min(10),
      url: z.string().url({ message: "Please enter a valid url" }),
    })
  ),
});
