// Minimal, dependency-free static server for the SPA.
// Serves the Vite build (dist/) under the CloudFront/Heroku base path.
// Hash routing means the server only ever sees the base + asset requests, so no
// SPA rewrite is strictly required; an index.html fallback is kept as a safety net.
import http from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const DIST = join(fileURLToPath(new URL('.', import.meta.url)), 'dist')
const BASE = '/api/rhinocommon'
const PORT = process.env.PORT || 3000

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.map': 'application/json',
}

async function send(res, filePath, cache) {
  const data = await readFile(filePath)
  res.writeHead(200, {
    'Content-Type': TYPES[extname(filePath)] || 'application/octet-stream',
    'Cache-Control': cache,
  })
  res.end(data)
}

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(req.url.split('?')[0])
    if (urlPath === '/') {
      res.writeHead(302, { Location: BASE + '/' })
      return res.end()
    }
    if (!urlPath.startsWith(BASE)) {
      res.writeHead(404)
      return res.end('Not found')
    }
    let rel = urlPath.slice(BASE.length)
    if (rel === '' || rel === '/') rel = '/index.html'
    const filePath = join(DIST, rel)
    if (!filePath.startsWith(DIST)) {
      res.writeHead(403)
      return res.end('Forbidden')
    }
    try {
      const s = await stat(filePath)
      if (s.isDirectory()) throw new Error('is dir')
      // Content-hashed assets are immutable; everything else must revalidate.
      const cache = rel.startsWith('/assets/')
        ? 'public, max-age=31536000, immutable'
        : 'no-cache'
      await send(res, filePath, cache)
    } catch {
      await send(res, join(DIST, 'index.html'), 'no-cache')
    }
  } catch {
    res.writeHead(500)
    res.end('Server error')
  }
})

server.listen(PORT, () => console.log(`serving ${DIST} on :${PORT}${BASE}/`))
