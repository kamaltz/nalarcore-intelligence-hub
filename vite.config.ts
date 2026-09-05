// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Deploy target: Vercel. This `nitro` object is forwarded verbatim to nitro()
  // and only applies outside Lovable's own sandbox (Lovable still forces
  // cloudflare-module). Nitro's `vercel` preset emits Build Output API v3 into
  // `.vercel/output/`, which Vercel picks up with zero further config.
  nitro: {
    preset: "vercel",
    // Pin the serverless runtime to a Vercel-supported Node version instead of
    // whatever Node the build host happens to run (local/CI may be newer than
    // Vercel supports). Matches `engines.node` in package.json.
    // @ts-expect-error `vercel` is a valid Nitro key; the wrapper's type only surfaces `preset`/`output`.
    vercel: { functions: { runtime: "nodejs22.x" } },
  },
});
