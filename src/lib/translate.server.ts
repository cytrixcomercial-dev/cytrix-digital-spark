const LANG_NAMES: Record<string, string> = {
  "pt-BR": "Brazilian Portuguese",
  "en-US": "American English",
  "en-GB": "British English",
  es: "Spanish (Spain)",
  "pt-PT": "European Portuguese (Portugal)",
  fr: "French (France)",
};

export async function translateTexts(texts: string[], target: string): Promise<string[]> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) return texts;

  const targetName = LANG_NAMES[target] ?? target;
  const payload = texts.map((text, id) => ({ id, text }));

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        {
          role: "system",
          content:
            `You are a professional website localizer for Opriun, a data & AI consultancy. ` +
            `Translate each item's text from Portuguese into ${targetName}. Rules: keep the marketing tone; ` +
            `keep brand names ("Opriun", "Opriun", "Opriun Technologies"), emails, phone numbers, ` +
            `URLs, CNPJ numbers, product names (Power BI, BI Platform, BI Data Quality) unchanged; ` +
            `preserve capitalization style (ALL CAPS stays ALL CAPS); preserve leading/trailing spaces and punctuation; ` +
            `never add explanations. Reply ONLY with JSON: {"items":[{"id":number,"text":string}]} covering every id.`,
        },
        { role: "user", content: JSON.stringify({ items: payload }) },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    console.error("translate gateway error", res.status, await res.text().catch(() => ""));
    return texts;
  }

  const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
  const content = json.choices?.[0]?.message?.content ?? "{}";
  let parsed: { items?: Array<{ id?: number; text?: string }> } = {};
  try {
    parsed = JSON.parse(content);
  } catch {
    return texts;
  }

  const out = [...texts];
  for (const item of parsed.items ?? []) {
    if (typeof item?.id === "number" && typeof item.text === "string" && item.id >= 0 && item.id < out.length) {
      out[item.id] = item.text;
    }
  }
  return out;
}
