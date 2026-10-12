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
- Contact form must succeed if either the local DB insert or the CRM webhook succeeds — external hosts may lack the service-role key.
