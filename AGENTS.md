<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Hosting
- Self-hosting on Node (Hostinger) uses `npm run build:node` + `npm start` (nitro `node-server` preset); keep server code runtime-agnostic so both Lovable (Cloudflare) and Node builds work.
- Contact form inserts into leads first and fails if that insert fails; CRM and email run only afterwards as best-effort notifications, so every reported success is a persisted lead.
- Gate email notifications on confirmed local database persistence; email alone cannot mark a contact as delivered, so failed inserts never produce misleading email-only success.
- Contact database writes use the server-only contact-leads helper with deployment SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, inserting only name, company, email, phone and message into leads; the external deployment schema is independent of generated Cloud types.
- Keep global request logging in `src/start.ts` with ISO timestamps, method, query-free URL, status, duration and a server-generated UUID shared through `request-diagnostics.server.ts` with form responses and the `X-Request-ID` header; this correlates failures across Cloudflare and Node without retaining requests.
- Log only allowlisted error codes and channel statuses, never raw errors, stacks, provider bodies or submitted data; return safe form errors with the request ID so diagnostics cannot expose personal data or secrets.
- Validate both public forms with the shared contact schema before calling the server; validate representative text before adding its origin/region prefix so metadata cannot bypass message validation.
