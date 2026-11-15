import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const page = (name) => fileURLToPath(new URL(`./src/${name}`, import.meta.url));

export default defineConfig({
  root: "src",
  publicDir: "../public",
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: page("index.html"),
        recipes: page("recipes.html"),
        "recipe-details": page("recipe-details.html"),
        favorites: page("favorites.html")
      }
    }
  }
});
