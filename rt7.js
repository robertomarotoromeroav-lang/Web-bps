const { chromium } = require('/opt/node22/lib/node_modules/playwright')
;(async () => {
  const b = await chromium.launch()
  const p = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage()
  await p.route('**/*', r => r.request().url().startsWith('http://127.0.0.1:8041') ? r.continue() : r.fulfill({ status: 200, contentType: 'text/plain', body: '' }))
  await p.goto('http://127.0.0.1:8041/rep-col3.html', { waitUntil: 'domcontentloaded' })
  await p.waitForTimeout(1600)
  console.log('CON LA HOJA PUBLICADA HOY:', JSON.stringify(await p.evaluate(() => {
    const N = n => Math.round(n*10)/10, R = e => e.getBoundingClientRect()
    const t = document.querySelector('.rich-text__text'), rej = document.querySelector('.product-grid')
    return { texto: t ? { x: N(R(t).x), W: N(R(t).width) } : null,
      rejilla: rej ? { x: N(R(rej).x), W: N(R(rej).width) } : null,
      h2: t ? getComputedStyle(t.querySelector('h2')).fontSize : null }
  })))
  await b.close()
})()
