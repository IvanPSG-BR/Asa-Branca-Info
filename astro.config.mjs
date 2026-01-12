// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import yeskunallumami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), yeskunallumami({ id: "b35d2b85-fbb7-481e-9ab2-1016ff13db02"})],
  site: "https://asabrancainformatica.com.br",
  compressHTML: true,
});