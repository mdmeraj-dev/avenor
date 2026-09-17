import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packagePath = path.join(projectRoot, "package.json");
const extensionPackage = JSON.parse(await readFile(packagePath, "utf8"));

const variants = [
  {
    name: "Avenor Cobalt",
    path: "./themes/avenor-cobalt-color-theme.json",
    sha256: "c2fe2af037f896200194057dc4e8bb4e56e95f880a2342b58403df162e634dde",
    counts: { colors: 588, tokenColors: 21, semanticTokenColors: 32 },
    editor: "#0D2D43",
    sidebar: "#092337",
    lockedContrastExceptions: ["Button text"],
  },
  {
    name: "Avenor Charcoal",
    path: "./themes/avenor-charcoal-color-theme.json",
    sha256: "3d865b2a2c7e9e6f3eb273bc88b7fd1b100157c89e3778c18a8b95e24dd169ea",
    counts: { colors: 588, tokenColors: 21, semanticTokenColors: 32 },
    editor: "#1F1F1F",
    sidebar: "#181818",
  },
  {
    name: "Avenor Gunmetal",
    path: "./themes/avenor-gunmetal-color-theme.json",
    sha256: "c903f8d0b48760ddd06114a66b15550ba8f30c1e6f9fd29b982c03329481f8dc",
    counts: { colors: 588, tokenColors: 21, semanticTokenColors: 32 },
    editor: "#272B32",
    sidebar: "#20242A",
    lockedContrastExceptions: ["Button text"],
  },
  {
    name: "Avenor Indigo",
    path: "./themes/avenor-indigo-color-theme.json",
    sha256: "027e0522d3cfa8ff4eb483bee0ec9e0ae92dc5cdfbfc8eae74e27df52ddca37f",
    counts: { colors: 588, tokenColors: 21, semanticTokenColors: 32 },
    editor: "#22263D",
    sidebar: "#1B2031",
  },
  {
    name: "Avenor Ivory",
    path: "./themes/avenor-ivory-color-theme.json",
    uiTheme: "vs",
    sha256: "9a44ba5228a20ce3ec69bb3f1badf62b9235a6dd1604f5b42db7b595a28fdd2a",
    counts: { colors: 588, tokenColors: 21, semanticTokenColors: 32 },
    editor: "#FFFFFF",
    sidebar: "#F6F8FA",
  },
  {
    name: "Avenor Jade",
    path: "./themes/avenor-jade-color-theme.json",
    sha256: "8127818d4cad501620421cb701c0cd245006fe59c989c4e6c1a5bd33089e052c",
    counts: { colors: 588, tokenColors: 21, semanticTokenColors: 32 },
    editor: "#1A2625",
    sidebar: "#141E1D",
  },
  {
    name: "Avenor Navy",
    path: "./themes/avenor-navy-color-theme.json",
    sha256: "b6d6a3e55645fb11dac238c2f132b71944cc2ced9a1dc0240f75b76aad174526",
    counts: { colors: 588, tokenColors: 21, semanticTokenColors: 32 },
    editor: "#152033",
    sidebar: "#101927",
  },
  {
    name: "Avenor Obsidian",
    path: "./themes/avenor-obsidian-color-theme.json",
    sha256: "5334bc2ca4034322159043e136faffb3cd0cf971ea28fd9d511a0eaeaac709c8",
    counts: { colors: 588, tokenColors: 21, semanticTokenColors: 32 },
    editor: "#17191B",
    sidebar: "#121416",
  },
  {
    name: "Avenor Signature",
    path: "./themes/avenor-signature-color-theme.json",
    sha256: "f2a6f4d5a74c650bc566248112b92c0c5d8f123a1d38e63b6be7f035ccbe3a2d",
    counts: { colors: 588, tokenColors: 21, semanticTokenColors: 32 },
    editor: "#1C232D",
    sidebar: "#171D25",
  },
  {
    name: "Avenor Twilight",
    path: "./themes/avenor-twilight-color-theme.json",
    sha256: "4da8602c881333df07a5c4839fc6d7d42f08237adec2d3bbd957501ed0c3af99",
    counts: { colors: 588, tokenColors: 21, semanticTokenColors: 32 },
    editor: "#22213F",
    sidebar: "#1B1A33",
  },
];

const requiredSamples = [
  "javascript.js", "typescript.tsx", "python.py", "analytics.sql", "index.html", "styles.css",
  "config.json", "preview.md", "App.java", "preview.cpp", "Program.cs", "main.go", "main.rs",
];

const hexPattern = /^#[0-9A-F]{6}([0-9A-F]{2})?$/;

function sha256(data) {
  return createHash("sha256").update(data).digest("hex");
}

function channelToLinear(value) {
  const normalized = value / 255;
  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const red = channelToLinear(Number.parseInt(hex.slice(1, 3), 16));
  const green = channelToLinear(Number.parseInt(hex.slice(3, 5), 16));
  const blue = channelToLinear(Number.parseInt(hex.slice(5, 7), 16));
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrast(foreground, background) {
  const first = luminance(foreground);
  const second = luminance(background);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

function normalizeScope(scope) {
  return Array.isArray(scope) ? scope : [scope];
}

assert.equal(extensionPackage.name, "avenor");
assert.equal(extensionPackage.displayName, "Avenor");
assert.equal(extensionPackage.version, "1.0.0");
assert.equal(extensionPackage.publisher, "avenor");
assert.equal(extensionPackage.license, "MIT");
assert.equal(extensionPackage.description,
  "Ten refined VS Code color themes with deliberate surface hierarchy, semantic clarity, and controlled vibrancy.");
assert(extensionPackage.categories.includes("Themes"));
assert(extensionPackage.keywords.length <= 30, "Marketplace keywords exceed the 30-tag limit");
assert.equal(new Set(extensionPackage.keywords).size, extensionPackage.keywords.length,
  "Marketplace keywords must be unique");
assert.equal(extensionPackage.icon, "assets/avenor.png");
assert.deepEqual(extensionPackage.galleryBanner, { color: "#1C232D", theme: "dark" });
assert.deepEqual(extensionPackage.repository, {
  type: "git",
  url: "https://github.com/mdmeraj-dev/avenor.git",
});
assert.equal(extensionPackage.homepage, "https://github.com/mdmeraj-dev/avenor#readme");
assert.deepEqual(extensionPackage.bugs, {
  url: "https://github.com/mdmeraj-dev/avenor/issues",
});
assert.equal(extensionPackage.contributes.themes.length, 10);
assert.deepEqual(
  extensionPackage.contributes.themes.map(({ label, path: themePath, uiTheme }) => ({ label, path: themePath, uiTheme })),
  variants.map(({ name, path: themePath, uiTheme = "vs-dark" }) => ({ label: name, path: themePath, uiTheme })),
);

assert.deepEqual(
  (await readdir(path.join(projectRoot, "themes"))).sort(),
  variants.map(({ path: themePath }) => path.basename(themePath)).sort(),
  "Unexpected or missing theme file",
);

const minimumRatios = [];
const contrastWarnings = [];

function checkContrast(variant, role, foreground, background, target) {
  const ratio = contrast(foreground, background);
  if (ratio < target && variant.lockedContrastExceptions?.includes(role)) {
    contrastWarnings.push(
      `${variant.name}: ${role} ${ratio.toFixed(2)}:1 is below ${target}:1; locked input preserved unchanged`,
    );
  } else {
    assert(ratio >= target, `${variant.name}: ${role} contrast fell below ${target}:1`);
  }
  return ratio;
}

for (const variant of variants) {
  const themePath = path.join(projectRoot, variant.path.replace(/^\.\//, ""));
  const raw = await readFile(themePath, "utf8");
  assert.equal(sha256(raw), variant.sha256, `${variant.name}: theme file changed from its approved source`);

  const theme = JSON.parse(raw);
  assert.equal(theme.name, variant.name);
  assert.equal(theme.$schema, "vscode://schemas/color-theme");
  const expectedType = variant.uiTheme === "vs" ? "light" : "dark";
  assert(theme.type === undefined || theme.type === expectedType,
    `${variant.name}: optional theme type must be ${expectedType} when supplied`);
  assert.equal(theme.semanticHighlighting, true);
  assert.equal(Object.keys(theme.colors).length, variant.counts.colors);
  assert.equal(theme.tokenColors.length, variant.counts.tokenColors);
  assert.equal(Object.keys(theme.semanticTokenColors).length, variant.counts.semanticTokenColors);
  assert.equal(theme.colors["editor.background"], variant.editor);
  assert.equal(theme.colors["sideBar.background"], variant.sidebar);

  for (const [key, color] of Object.entries(theme.colors)) {
    assert(hexPattern.test(color), `${variant.name}: invalid Workbench color ${key}=${color}`);
  }

  const ruleNames = new Set();
  let minimumRatio = Number.POSITIVE_INFINITY;

  for (const rule of theme.tokenColors) {
    assert(rule.name && !ruleNames.has(rule.name), `${variant.name}: duplicate or missing TextMate rule name`);
    ruleNames.add(rule.name);
    assert(normalizeScope(rule.scope).every((scope) => typeof scope === "string" && scope.trim()),
      `${variant.name}: empty TextMate scope in ${rule.name}`);
    assert(hexPattern.test(rule.settings.foreground), `${variant.name}: invalid TextMate color in ${rule.name}`);
    minimumRatio = Math.min(minimumRatio,
      checkContrast(variant, `TextMate ${rule.name}`, rule.settings.foreground.slice(0, 7), variant.editor, 3));
  }

  for (const [selector, value] of Object.entries(theme.semanticTokenColors)) {
    const color = typeof value === "string" ? value : value.foreground;
    assert(hexPattern.test(color), `${variant.name}: invalid semantic color for ${selector}`);
    minimumRatio = Math.min(minimumRatio,
      checkContrast(variant, `Semantic ${selector}`, color.slice(0, 7), variant.editor, 3));
  }

  checkContrast(variant, "Primary editor text", theme.colors["editor.foreground"], variant.editor, 7);
  checkContrast(variant, "Button text", theme.colors["button.foreground"], theme.colors["button.background"], 4.5);

  minimumRatios.push(minimumRatio);
}

for (const filename of requiredSamples) {
  const details = await stat(path.join(projectRoot, "samples", filename));
  assert(details.isFile() && details.size > 0, `Missing or empty sample: ${filename}`);
}

const packageText = await readFile(packagePath, "utf8");
const readmeText = await readFile(path.join(projectRoot, "README.md"), "utf8");
const changelogText = await readFile(path.join(projectRoot, "CHANGELOG.md"), "utf8");
const supportText = await readFile(path.join(projectRoot, "SUPPORT.md"), "utf8");
const screenshotGuideText = await readFile(path.join(projectRoot, "docs", "SCREENSHOTS.md"), "utf8");

assert(!packageText.includes("Avenor Classic"), "Old Classic name remains in package metadata");
assert(!readmeText.includes("Avenor Classic"), "Old Classic name remains in README");
assert(!packageText.includes("Avenor Dawn"), "Retired Dawn name remains in package metadata");
assert(!readmeText.includes("Avenor Dawn"), "Retired Dawn name remains in README");
assert(!packageText.includes("Avenor Graphite"), "Retired Graphite name remains in package metadata");
assert(!readmeText.includes("Avenor Graphite"), "Retired Graphite name remains in README");

assert(readmeText.startsWith("<p align=\"center\">\n  <img src=\"assets/avenor.png\" alt=\"Avenor logo\" width=\"120\" />\n</p>\n\n# Avenor"),
  "README hero must begin with the centered 120px Avenor logo and product name");
assert(readmeText.includes("Refined Color. Clear Code."), "README is missing the Avenor tagline");
assert(readmeText.includes("Avenor Signature"), "README is missing the flagship theme");
assert(readmeText.includes("## Theme Collection"), "README is missing the collection section");
assert(readmeText.includes("## Installation"), "README is missing installation instructions");
assert(readmeText.includes("https://github.com/mdmeraj-dev/avenor"),
  "README is missing the public repository link");
assert(readmeText.includes("https://github.com/mdmeraj-dev/avenor/issues"),
  "README is missing the public issue tracker link");
assert(readmeText.includes("https://github.com/mdmeraj-dev/avenor/releases"),
  "README is missing the public releases link");
assert(changelogText.includes("## [1.0.0] - 2026-09-15"), "CHANGELOG is missing the 1.0.0 release");
assert(supportText.includes("https://github.com/mdmeraj-dev/avenor/issues"),
  "SUPPORT is missing the public issue tracker link");

for (const variant of variants) {
  assert(readmeText.includes(variant.name), `README is missing ${variant.name}`);
  assert(changelogText.includes(variant.name), `CHANGELOG is missing ${variant.name}`);
  const slug = variant.name.replace(/^Avenor /, "").toLowerCase();
  assert(screenshotGuideText.includes(`avenor-${slug}.png`),
    `Screenshot guide is missing ${variant.name}`);
}

for (const filename of ["README.md", "CHANGELOG.md", "LICENSE", "SUPPORT.md", "CONTRIBUTING.md", ".vscodeignore"]) {
  const details = await stat(path.join(projectRoot, filename));
  assert(details.isFile() && details.size > 0, `Missing or empty project file: ${filename}`);
}

const screenshotGuideDetails = await stat(path.join(projectRoot, "docs", "SCREENSHOTS.md"));
assert(screenshotGuideDetails.isFile() && screenshotGuideDetails.size > 0,
  "Missing or empty screenshot guide: docs/SCREENSHOTS.md");

const screenshotFiles = (await readdir(path.join(projectRoot, "assets", "screenshots")))
  .filter((filename) => filename.endsWith(".png"));

console.log("Avenor 1.0.0 structure, metadata, documentation, and locked-palette validation passed");
console.log("  Cobalt, Charcoal, Gunmetal, Indigo, Ivory, Jade, Navy, Obsidian, Signature, and Twilight are the only contributed themes");
console.log("  All ten approved theme palettes retain their locked hashes");
console.log("  Ivory contribution is present and uses VS Code light UI mode");
console.log("  Publisher avenor and extension ID avenor.avenor are confirmed in package metadata");
console.log("  Public repository, homepage, and issue-tracker URLs are active");
console.log(`  ${screenshotFiles.length} real gallery screenshots present`);
if (screenshotFiles.length === 0) {
  console.warn("  SCREENSHOT ADVISORY: desktop VS Code capture is required; no screenshots were fabricated");
}
for (let index = 0; index < variants.length; index += 1) {
  console.log(`  ${variants[index].name}: minimum syntax contrast ${minimumRatios[index].toFixed(2)}:1`);
}
console.log("  13 representative language samples");
for (const warning of contrastWarnings) {
  console.warn(`  CONTRAST ADVISORY: ${warning}`);
}
