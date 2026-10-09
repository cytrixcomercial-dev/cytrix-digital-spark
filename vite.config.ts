import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Wrapper handles: tsConfigPaths + "@" alias, tanstackStart, viteReact, tailwind,
// nitro (build-only), VITE_* env injection, dedupe, and sandbox detection.
// - Lovable build: pins its own Cloudflare preset and writes dist/.
// - Self-host (Hostinger/Node.js): nitro preset "node-server" -> .output/,
//   served with `npm run start` (node .output/server/index.mjs).
export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: { preset: "node-server" },
  vite: {
    build: { cssMinify: false },
  },
});
