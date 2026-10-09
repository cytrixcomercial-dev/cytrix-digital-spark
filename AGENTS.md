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

## Deployment
- Self-host (Hostinger/Node.js): production runs the Nitro output — `npm run start` / `npm run serve` executes `node .output/server/index.mjs`; `npm run preview` builds first then serves it. Never point a host at the project root; it must target the `.output` folder (Nitro node-server preset, respects `PORT`).
