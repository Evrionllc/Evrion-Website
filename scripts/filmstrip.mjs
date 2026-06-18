// Viewport-sized "filmstrip" shots down a route at a real phone size — the
// honest way to judge type/spacing (fullPage distorts svh/scrub sections).
// Usage: node scripts/filmstrip.mjs <route> <label>
import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const route = process.argv[2] ?? "/";
const label = process.argv[3] ?? "home";
const OUT = `scripts/film/${label}`;
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 }, deviceScaleFactor: 2,
  isMobile: true, hasTouch: true,
});
const page = await ctx.newPage();
await page.goto("http://localhost:3000" + route, { waitUntil: "networkidle" });
await page.waitForTimeout(route === "/" ? 4200 : 2200);

const pageH = await page.evaluate(() => document.body.scrollHeight);
const step = 760; // slight overlap with 844 viewport
let i = 0;
for (let y = 0; y < pageH; y += step) {
  await page.evaluate((to) => window.scrollTo(0, to), y);
  await page.waitForTimeout(450); // let reveals at this offset settle
  await page.screenshot({ path: `${OUT}/${String(i).padStart(2, "0")}.png` });
  i++;
}
console.log(`${label}: ${i} frames, pageH=${pageH}`);
await browser.close();
