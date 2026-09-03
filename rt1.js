const { chromium } = require('/opt/node22/lib/node_modules/playwright')
const S = __dirname + '/'
;(async () => {
  const b = await chromium.launch()
  for (const [w, h, etq] of [[1440, 900, 'd'], [390, 844, 'm']]) {
    const p = await (await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 })).newPage()
    await p.route('**/*', r => r.request().url().startsWith('http://127.0.0.1:8041') ? r.continue() : r.fulfill({ status: 200, contentType: 'text/plain', body: '' }))
    await p.goto('http://127.0.0.1:8041/rep-col2.html', { waitUntil: 'domcontentloaded' })
    await p.waitForTimeout(1600)
    console.log(etq, JSON.stringify(await p.evaluate(() => {
      const N = n => Math.round(n * 10) / 10, R = e => e.getBoundingClientRect()
      const box = (s) => { const e = document.querySelector(s); return e ? { x: N(R(e).x), W: N(R(e).width) } : null }
      const g = (s, k) => { const e = document.querySelector(s); return e ? getComputedStyle(e)[k] : null }
      const par = document.querySelector('.rich-text__text p')
      return {
        seccion: box('.rich-text'),
        envoltorio: box('.rich-text__wrapper'),
        bloques: { ...box('.rich-text__blocks'), maxW: g('.rich-text__blocks', 'maxWidth') },
        rejillaProductos: box('.collection .product-grid, .product-grid'),
        parrafo: par ? { W: N(R(par).width), fs: getComputedStyle(par).fontSize, chars: Math.round(R(par).width / (parseFloat(getComputedStyle(par).fontSize) * 0.5)) } : null,
        h1: [...document.querySelectorAll('h1')].map(e => e.textContent.replace(/\s+/g, ' ').trim().slice(0, 45)),
      }
    }), null, 1))
    await p.screenshot({ path: S + `rt-antes-${etq}.png`, clip: { x: 0, y: 0, width: w, height: Math.min(h, 900) } })
    await p.close()
  }
  await b.close()
})()
