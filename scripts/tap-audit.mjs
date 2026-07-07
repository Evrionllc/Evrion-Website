// Find interactive elements smaller than the 44x44px touch minimum, per route.
import { chromium } from "playwright-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const ROUTES = ["/", "/work", "/work/atlas-freight", "/services", "/studio", "/blog", "/contact"];
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

for (const route of ROUTES) {
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000" + route, { waitUntil: "networkidle" });
  await page.waitForTimeout(route === "/" ? 4200 : 2200);
  // trigger reveals so nothing is hidden/zero-size
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 600) { await page.evaluate((t) => scrollTo(0, t), y); await page.waitForTimeout(60); }
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(300);

  const small = await page.evaluate(() => {
    const out = [];
    const seen = new Set();
    for (const el of document.querySelectorAll('a[href], button, input, [role="button"], summary')) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue; // hidden
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      if (r.height < 44 || r.width < 44) {
        const label = (el.textContent || el.getAttribute("aria-label") || el.tagName).trim().slice(0, 34);
        const key = label + Math.round(r.height) + Math.round(r.width);
        if (seen.has(key)) continue; seen.add(key);
        out.push({ t: el.tagName.toLowerCase(), w: Math.round(r.width), h: Math.round(r.height), label });
      }
    }
    return out;
  });
  console.log(`\n${route}  (${small.length} under 44px)`);
  for (const s of small) console.log(`  ${s.w}x${s.h}  <${s.t}> "${s.label}"`);
  await page.close();
}
await browser.close();
