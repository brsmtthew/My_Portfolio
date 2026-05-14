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
    const canvases = [...document.querySelectorAll(".three-scene canvas")];
    const rect = portrait.getBoundingClientRect();
    const canvasHasPixels = (canvas) => {
      const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
      if (!gl || canvas.width === 0 || canvas.height === 0) return false;

      const points = [
        [0.5, 0.5],
        [0.38, 0.5],
        [0.62, 0.5],
        [0.5, 0.35],
        [0.5, 0.65],
      ];

      return points.some(([x, y]) => {
        const pixel = new Uint8Array(4);
        gl.readPixels(
          Math.floor(canvas.width * x),
          Math.floor(canvas.height * y),
          1,
          1,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          pixel,
        );
        return pixel[3] > 0 && (pixel[0] > 8 || pixel[1] > 8 || pixel[2] > 8);
      });
    };

    return {
      portraitWidth: Math.round(rect.width),
      portraitHeight: Math.round(rect.height),
      imageLoaded: image.complete && image.naturalWidth > 0,
      canvasCount: canvases.length,
      canvasReady: canvases.every((canvas) => canvas.width > 0 && canvas.height > 0),
      canvasPixels: canvases.every(canvasHasPixels),
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
  const canvas =
    result.canvasReady && result.canvasPixels
      ? `${result.canvasCount}-canvas-painted`
      : "canvas-missing";
  console.log(
    `${result.viewport}: ${overflow}, ${portrait}, ${canvas}, ${result.portraitWidth}x${result.portraitHeight}, title="${result.title}"`,
  );
}

const failures = results.filter(
  (result) =>
    result.scrollWidth > result.clientWidth + 1 ||
    result.portraitWidth < 240 ||
    result.portraitHeight < 250 ||
    !result.imageLoaded ||
    result.canvasCount < 2 ||
    !result.canvasReady ||
    !result.canvasPixels,
);

if (failures.length > 0) {
  console.error("Visual verification failed:", failures);
  process.exit(1);
}
