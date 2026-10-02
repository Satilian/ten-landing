import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import { build } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = resolve(root, 'node_modules/.cache/site-prerender')

// Isolated SSR build: no Figma preview plugins or public asset copies.
await build({
  configFile: false,
  root,
  publicDir: false,
  esbuild: { jsx: 'automatic' },
  build: {
    ssr: resolve(root, 'src/entry-server.tsx'),
    outDir: output,
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
  },
})

const { render } = await import(pathToFileURL(resolve(output, 'entry-server.mjs')).href)
const indexPath = resolve(root, 'dist/index.html')
const html = await readFile(indexPath, 'utf8')
const placeholder = '<div id="root"></div>'
if (!html.includes(placeholder)) throw new Error('Missing root placeholder for prerendering')
// Callback replacement preserves literal $ characters in rendered content.
await writeFile(indexPath, html.replace(placeholder, () => `<div id="root">${render()}</div>`))
console.log('Prerendered homepage into dist/index.html')
