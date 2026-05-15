import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const url = process.env.CHECK_URL ?? "http://127.0.0.1:5173";
const viewports = [
  { name: "mobile-375", width: 375, height: 900 },
  { name: "tablet-768", width: 768, height: 960 },
  { name: "desktop-1280", width: 1280, height: 900 },
  { name: "wide-1920", width: 1920, height: 1080 },
];

async function launchBrowser() {
  const launchOptions = {
    headless: true,
    args: ["--enable-webgl", "--use-gl=angle", "--use-angle=swiftshader"],
  };

  try {
    return await chromium.launch(launchOptions);
  } catch (error) {
    return chromium.launch({ ...launchOptions, channel: "msedge" });
  }
}

await mkdir("verification", { recursive: true });

const results = [];

for (const viewport of viewports) {
  const browser = await launchBrowser();
  const page = await browser.newPage({ viewport });
  console.log(`Checking ${viewport.name}...`);
  await page.goto(`${url}?check=${Date.now()}-${viewport.name}`, { waitUntil: "networkidle" });
  await page.waitForSelector(".portrait-stage img", { state: "attached", timeout: 10000 });
  await page.waitForFunction(() => {
    const image = document.querySelector(".portrait-stage img");
    return image?.complete && image.naturalWidth > 0;
  });
  await page.waitForTimeout(900);

  const metrics = await page.evaluate(() => {
    const portrait = document.querySelector(".portrait-stage");
    const image = document.querySelector(".portrait-stage img");
    const rect = portrait.getBoundingClientRect();
    const backdrop = document.querySelector(".live-backdrop");
    const backdropStyle = backdrop ? getComputedStyle(backdrop) : null;

    return {
      portraitWidth: Math.round(rect.width),
      portraitHeight: Math.round(rect.height),
      imageLoaded: image.complete && image.naturalWidth > 0,
      backdropReady: Boolean(backdropStyle && backdropStyle.backgroundImage !== "none"),
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      title: document.title,
    };
  });

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(250);

  await page.screenshot({
    path: `verification/${viewport.name}.png`,
    fullPage: true,
  });

  results.push({ viewport: viewport.name, ...metrics });
  await page.close();
  await browser.close();
}

for (const result of results) {
  const overflow = result.scrollWidth > result.clientWidth + 1 ? "overflow" : "no-overflow";
  const portrait = result.imageLoaded ? "portrait-loaded" : "portrait-missing";
  const backdrop = result.backdropReady ? "css-backdrop-ready" : "backdrop-missing";
  console.log(
    `${result.viewport}: ${overflow}, ${portrait}, ${backdrop}, ${result.portraitWidth}x${result.portraitHeight}, title="${result.title}"`,
  );
}

const failures = results.filter(
  (result) =>
    result.scrollWidth > result.clientWidth + 1 ||
    result.portraitWidth < 240 ||
    result.portraitHeight < 250 ||
    !result.imageLoaded ||
    !result.backdropReady,
);

if (failures.length > 0) {
  console.error("Visual verification failed:", failures);
  process.exit(1);
}
