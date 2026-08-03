import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { translateTexts } from "./translate.server";

const schema = z.object({
  target: z.enum(["pt-BR", "en-US", "en-GB", "es", "pt-PT", "fr"]),
  texts: z.array(z.string().min(1).max(2000)).min(1).max(80),
});

export const translateContent = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    if (data.target === "pt-BR") return { texts: data.texts };
    const texts = await translateTexts(data.texts, data.target);
    return { texts };
  });
