import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import clerk from "@clerk/astro";

export default defineConfig({
  integrations: [clerk()],
  adapter: vercel(),
  output: "server",
});