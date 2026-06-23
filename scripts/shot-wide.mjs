// Verify large-screen widening: capture home + studio at several widths.
import { chromium } from "playwright-core";

const EXEC =
  process.env.HOME +
  "/Library/Caches/ms-playwright/chromium-1223/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";

const widths = [
  { w: 1440, h: 900, tag: "1440" },
  { w: 2560, h: 1440, tag: "2560" },
  { w: 3840, h: 2160, tag: "3840" },
];

const browser = await chromium.launch({
  executablePath: EXEC,
  headless: true,
  args: ["--force-device-scale-factor=1", "--high-dpi-support=1"],
});

for (const { w, h, tag } of widths) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();

  await page.goto("http://localhost:3001", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(4500);
  await page.screenshot({ path: `scripts/wide-home-${tag}.png` });

  const m = await page.evaluate(() => {
    const el = document.querySelector(".container-x");
    const r = el?.getBoundingClientRect();
    return {
      innerWidth: window.innerWidth,
      content: r ? Math.round(r.width) : null,
      gutter: r ? Math.round((window.innerWidth - r.width) / 2) : null,
      root: getComputedStyle(document.documentElement).fontSize,
    };
  });
  console.log(`${tag}:`, JSON.stringify(m));

  try {
    await page.goto("http://localhost:3001/studio", { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `scripts/wide-studio-${tag}.png` });
  } catch (e) {
    console.log(`${tag} studio shot skipped:`, e.message.split("\n")[0]);
  }

  await ctx.close();
}

await browser.close();
