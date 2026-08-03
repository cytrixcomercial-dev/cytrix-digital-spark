import { createFileRoute } from "@tanstack/react-router";
import { CYTRIX_LOGO_BASE64 } from "@/lib/cytrix-logo-base64";

// vCard 3.0 requires long values folded at 75 octets with a leading space.
function foldLine(line: string) {
  const chunks: string[] = [];
  let rest = line;
  chunks.push(rest.slice(0, 74));
  rest = rest.slice(74);
  while (rest.length) {
    chunks.push(" " + rest.slice(0, 73));
    rest = rest.slice(73);
  }
  return chunks.join("\r\n");
}

export const Route = createFileRoute("/api/public/cytrix-contact.vcf")({
  server: {
    handlers: {
      GET: () => {
        const vcard = [
          "BEGIN:VCARD",
          "VERSION:3.0",
          "FN:Cytrix Data Consulting",
          "ORG:CYTRIX TECHNOLOGIES LTDA",
          "TEL;TYPE=CELL,VOICE,WHATSAPP:+5541996890003",
          "EMAIL;TYPE=INTERNET,WORK:comercial@cytrix.com.br",
          "ADR;TYPE=WORK:;;Avenida Vicente Machado, 520 - Centro;Curitiba;PR;80420-010;Brasil",
          "URL:https://project--06e41034-2559-4fbe-be9d-e7c5e5ff6e42-dev.lovable.app/",
          "X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/company/cytrix-data-consulting",
          foldLine(`PHOTO;ENCODING=b;TYPE=JPEG:${CYTRIX_LOGO_BASE64}`),
          foldLine(`LOGO;ENCODING=b;TYPE=JPEG:${CYTRIX_LOGO_BASE64}`),
          "NOTE:A Cytrix Data Consulting potencializa negócios com automação inteligente.\\nUnificamos ecossistemas digitais e implementamos agentes autônomos de IA.\\nTransformamos dados em decisões rápidas, integradas e escaláveis.\\nO resultado é uma operação ágil, conectada e preparada para crescer.",
          "END:VCARD",
          "",
        ].join("\r\n");

        return new Response(vcard, {
          headers: {
            "Content-Type": "text/vcard; charset=utf-8",
            "Content-Disposition": 'attachment; filename="cytrix-data-consulting.vcf"',
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});