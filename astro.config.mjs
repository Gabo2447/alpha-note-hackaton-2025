// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import vercel from "@astrojs/vercel/serverless";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [clerk()],
  adapter: vercel(),
  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },
});