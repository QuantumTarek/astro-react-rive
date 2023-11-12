import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal:
        process.env.NODE_ENV === "production" ? ["@rive-app/react-canvas"] : [],
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  integrations: [react(), tailwind()],
});
