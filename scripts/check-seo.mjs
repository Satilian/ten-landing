import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'

const read = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8')
const [html, robots, sitemap] = await Promise.all(['index.html', 'robots.txt', 'sitemap.xml'].map(read))
const canonical = 'https://xn----8sbp0adwfdf8h.xn--p1ai/'
assert.match(html, /<html lang="ru">/)
assert.match(html, /<title>ТЭН-Мастер/)
assert.match(html, /name="description" content="ТЭНы/)
assert.ok(html.includes(`rel="canonical" href="${canonical}"`))
assert.doesNotMatch(html, /noindex|nofollow/)
assert.equal((html.match(/<h1[\s>]/g) || []).length, 1)
assert.match(html, /<main>/)
assert.ok(html.includes('Сигнальный проезд, 16, стр. 19'))
assert.ok(html.includes('id="root"><'))
assert.match(robots, /Allow: \//)
assert.doesNotMatch(robots, /Disallow:\s*\/\s*(?:$|\n)/)
assert.ok(robots.includes(`Sitemap: ${canonical}sitemap.xml`))
assert.ok(sitemap.includes(`<loc>${canonical}</loc>`))
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])
assert.equal(schema['@context'], 'https://schema.org')
assert.ok(schema['@graph'].every((entry) => entry.url === canonical))
console.log('SEO checks passed: indexability, metadata, canonical, sitemap, JSON-LD and prerendered content')
