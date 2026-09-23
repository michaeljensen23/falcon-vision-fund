import { chromium } from "playwright";
import { mkdirSync, realpathSync } from "node:fs";
import { basename, dirname, relative, resolve } from "node:path";

const WORKSPACE = realpathSync(resolve("/workspace"));
const PRINT_URL = "http://127.0.0.1:8080/print";
const DEFAULT_OUT = resolve(WORKSPACE, "public/Falcon_Vision_Fund_I_Portfolio.pdf");
const PDF_NAME = /^[A-Za-z0-9._-]+\.pdf$/;

function assertSafeUrl(raw) {
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    throw new Error("PDF source URL is invalid");
  }
  if (
    parsed.protocol !== "http:" ||
    parsed.hostname !== "127.0.0.1" ||
    parsed.port !== "8080" ||
    parsed.username ||
    parsed.password ||
    parsed.pathname !== "/print" ||
    parsed.search ||
    parsed.hash
  ) {
    throw new Error("PDF source URL must be the local print page");
  }
  return parsed.href;
}

function assertSafeOut(raw) {
  const name = basename(raw);
  if (!PDF_NAME.test(name)) {
    throw new Error("PDF filename is not allowed");
  }
  const dir = resolve(dirname(raw));
  mkdirSync(dir, { recursive: true });
  const realDir = realpathSync(dir);
  const rel = relative(WORKSPACE, realDir);
  if (rel.startsWith("..") || rel.startsWith("/")) {
    throw new Error("PDF output path must be a file inside the workspace");
  }
  return resolve(realDir, name);
}

const url = assertSafeUrl(process.argv[2] ?? PRINT_URL);
const out = assertSafeOut(process.argv[3] ?? DEFAULT_OUT);

const browser = await chromium.launch({ args: ["--no-sandbox"] });
try {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  const landed = new URL(page.url());
  if (landed.origin !== "http://127.0.0.1:8080" || landed.pathname !== "/print") {
    throw new Error("PDF source navigated away from the print page");
  }
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      [...document.images].map(
        (img) =>
          img.complete ||
          new Promise((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          }),
      ),
    );
  });
  await page.evaluate(
    () =>
      new Promise((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      }),
  );
  await page.pdf({
    path: out,
    width: "13.333in",
    height: "7.5in",
    landscape: false,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  console.log("wrote", out);
} finally {
  await browser.close();
}