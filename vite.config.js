import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import ejs from 'ejs';
import * as data from './src/views/data.js';

const root = fileURLToPath(new URL('.', import.meta.url));

/**
 * Renders EJS inside .html pages before Vite processes them,
 * so partials (header, footer, card, icon) are reused across pages.
 */
function ejsHtml(locals) {
  return {
    name: 'ejs-html',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        return ejs.render(html, locals, { filename: ctx.filename });
      },
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.ejs')) {
        server.ws.send({ type: 'full-reload' });
        return [];
      }
      return undefined;
    },
  };
}

export default defineConfig({
  base: './',
  server: { port: 5173 },
  plugins: [ejsHtml({ ...data })],
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        recipes: resolve(root, 'recipes.html'),
        recipe: resolve(root, 'recipe.html'),
        favorites: resolve(root, 'favorites.html'),
      },
    },
  },
});
