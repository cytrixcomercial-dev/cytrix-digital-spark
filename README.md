# Site Opriun — www.opriun.com.br

Site institucional da Opriun (TanStack Start + React 19 + Vite + Tailwind v4).

## Desenvolvimento local

```sh
npm install
npm run dev
```

## Hospedagem na Hostinger (Node.js Web App)

1. No painel da Hostinger: **Websites → Adicionar site → Node.js Web App** e conecte este repositório do GitHub.
2. Configurações de build:
   - Versão do Node: **22**
   - Comando de instalação: `npm install`
   - Comando de build: `npm run build:node`
   - Comando de início: `npm start`
   - Pasta de saída: `.output`
3. Variáveis de ambiente (veja `.env.example`): `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`,
   `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`,
   `GOOGLE_ANALYTICS_MEASUREMENT_ID`, `CRM_WEBHOOK_SECRET` (e opcional `CRM_WEBHOOK_URL`).
4. Aponte o domínio `www.opriun.com.br` para o app na Hostinger.

O servidor escuta na porta definida por `PORT` (padrão 3000).

## Observações

- O formulário de contato envia os leads ao Opriun CRM. A cópia no banco do site só é gravada se `SUPABASE_SERVICE_ROLE_KEY` estiver configurada.
- A tradução automática usa a IA do Lovable e só funciona quando hospedado no Lovable; fora dele, as páginas aparecem no idioma original.
- O arquivo `.env` real não deve ser enviado ao GitHub com segredos.
