import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs';

const wpDist = resolve(__dirname, 'wordpress/fmf-landing/dist');

function copyToWordPress() {
  return {
    name: 'copy-to-wordpress',
    closeBundle() {
      const dist = resolve(__dirname, 'dist');
      if (!existsSync(dist)) return;
      rmSync(wpDist, { recursive: true, force: true });
      mkdirSync(wpDist, { recursive: true });
      cpSync(dist, wpDist, { recursive: true });
    },
  };
}

export default defineConfig({
  base: './',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
  plugins: [copyToWordPress()],
});
