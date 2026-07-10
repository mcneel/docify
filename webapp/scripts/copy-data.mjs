// Copies the generator's JSON output (src/*.json) into public/data/ so the SPA
// can fetch it at runtime. Runs on `predev`/`prebuild`. public/data is gitignored.
import { mkdirSync, copyFileSync, existsSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = join(root, 'src')
const destDir = join(root, 'public', 'data')

mkdirSync(destDir, { recursive: true })

const files = ['api_info.json', 'api_examples.json']
for (const f of files) {
  const from = join(srcDir, f)
  if (!existsSync(from)) {
    console.warn(`[copy-data] WARNING: missing ${from} — run the docify generator first`)
    continue
  }
  copyFileSync(from, join(destDir, f))
  const mb = (statSync(from).size / 1e6).toFixed(1)
  console.log(`[copy-data] ${f} (${mb} MB) -> public/data/`)
}
