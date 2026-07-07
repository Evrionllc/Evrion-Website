// Mobile-viewport full-page screenshots for every route, on macOS Chrome.
// Usage: node scripts/shot-mobile.mjs [label]   (label defaults to "before")
import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "http://localhost:3000";
const LABEL = process.argv[2] ?? "before";
const OUT = `scripts/mobile/${LABEL}`;

// iPhone 13 / 14 logical viewport.
const VIEWPORT = { width: 390, height: 844 };

const ROUTES = [
  ["home", "/"],
  ["work", "/work"],
  ["case-study", "/work/atlas-freight"],
  ["services", "/services"],
  ["studio", "/studio"],
  ["blog", "/blog"],
  ["contact", "/contact"],
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
  userAgent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
});

const allErrors = {};

for (const [name, route] of ROUTES) {
  const page = await context.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));

  await page.goto(BASE + route, { waitUntil: "networkidle" });
  // let preloader + entrance choreography settle
  await page.waitForTimeout(name === "home" ? 4200 : 2200);

  // Scroll the full page in steps so scroll-scrubbed / whileInView reveals all
  // fire and settle to their final state before we capture (otherwise off-screen
  // cards freeze in their pre-reveal clipped form in a fullPage shot).
  const pageH = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < pageH; y += 600) {
    await page.evaluate((to) => window.scrollTo(0, to), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);

  // detect horizontal overflow (the #1 mobile bug)
  const overflow = await page.evaluate(() => {
    const de = document.documentElement;
    return {
      scrollW: de.scrollWidth,
      clientW: de.clientWidth,
      overflow: de.scrollWidth - de.clientWidth,
    };
  });

  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  if (errors.length) allErrors[name] = errors;
  console.log(
    `${name.padEnd(12)} overflow=${overflow.overflow}px (scrollW ${overflow.scrollW} / clientW ${overflow.clientW})`
  );
  await page.close();
}

console.log("\nconsole errors:", Object.keys(allErrors).length ? allErrors : "none");
await browser.close();
