# Avenor Release Checklist

Use this checklist before publishing a new Avenor release or Marketplace update.

## 1. Version and Metadata

- [ ] `package.json` contains the intended release version.
- [ ] `displayName`, description, publisher, repository, homepage, bugs URL, license, categories, and keywords are correct.
- [ ] The contributed theme list contains every intended variant exactly once.
- [ ] Theme labels and file paths match the files under `themes/`.
- [ ] The VS Code engine requirement is intentional.
- [ ] The extension icon resolves correctly and represents the current Avenor brand.
- [ ] README version references and local VSIX filenames match the release version.

## 2. Changelog

- [ ] `CHANGELOG.md` contains a section for the release version.
- [ ] The release date is correct.
- [ ] Added, changed, fixed, or removed behavior is described accurately.
- [ ] The changelog does not claim Marketplace publication before publication actually occurs.

## 3. Validation

Run from a clean checkout:

```bash
npm ci
npm test
npm run package
```

Confirm:

- [ ] Dependency installation completes successfully.
- [ ] All automated validation checks pass.
- [ ] `dist/avenor-<version>.vsix` is created successfully.
- [ ] The packaged extension installs successfully into desktop Visual Studio Code.
- [ ] No unintended source, private, temporary, or oversized files are included in the package.

## 4. Theme QA

Inspect every contributed theme in the installed VSIX.

- [ ] Avenor Signature
- [ ] Avenor Cobalt
- [ ] Avenor Charcoal
- [ ] Avenor Gunmetal
- [ ] Avenor Indigo
- [ ] Avenor Ivory
- [ ] Avenor Jade
- [ ] Avenor Navy
- [ ] Avenor Obsidian
- [ ] Avenor Twilight

For each theme, verify:

- [ ] Editor text is readable.
- [ ] Comments remain readable without dominating code.
- [ ] Selection and current-line states are visible.
- [ ] Active and inactive tabs are distinguishable.
- [ ] Sidebar, panel, input, widget, and elevated surfaces retain hierarchy.
- [ ] Git, diff, diagnostic, test, and debug states remain legible.
- [ ] Terminal ANSI colors are usable.
- [ ] Bracket-pair colors remain distinguishable.
- [ ] Focus and accessibility states remain visible.

## 5. Language QA

At minimum, inspect the fixtures in `samples/` that represent:

- [ ] TypeScript / TSX
- [ ] JavaScript
- [ ] Python
- [ ] SQL
- [ ] HTML
- [ ] CSS
- [ ] JSON
- [ ] Markdown
- [ ] Java
- [ ] C++
- [ ] C#
- [ ] Go
- [ ] Rust

When highlighting looks wrong, use **Developer: Inspect Editor Tokens and Scopes** before changing a palette. Confirm whether the appearance comes from TextMate scopes, semantic tokens, or the active language extension.

## 6. Screenshots

Follow [SCREENSHOTS.md](SCREENSHOTS.md).

- [ ] All ten primary gallery screenshots are real VS Code captures.
- [ ] Captures use the same window size, workspace, editor scene, font, scale, and UI layout.
- [ ] The screenshots contain no secrets, personal information, private repositories, or unrelated UI.
- [ ] `avenor-signature.png` is approved as the flagship hero.
- [ ] README image paths resolve.
- [ ] Images remain sharp at GitHub and Marketplace widths.

## 7. Documentation

- [ ] README claims match the package that will actually ship.
- [ ] Installation instructions are correct for the current release state.
- [ ] Theme names are consistent across README, `package.json`, screenshots, issue forms, and changelog.
- [ ] `CONTRIBUTING.md` reflects the current validation workflow.
- [ ] `SUPPORT.md` points users to the correct reporting path.
- [ ] All internal Markdown links resolve.
- [ ] No placeholder text, stale comments, TODOs, or draft language remains in public-facing documentation.

## 8. Repository and CI

- [ ] The default branch is clean and contains only intended release changes.
- [ ] GitHub Actions validation passes for the release commit.
- [ ] Issue templates still match the current theme collection.
- [ ] No generated VSIX, temporary capture, secret, credential, or local-only file is accidentally committed.

## 9. Marketplace Review

Before pressing publish, verify the rendered Marketplace page rather than only the source Markdown.

- [ ] Extension name and publisher are correct.
- [ ] Icon renders sharply.
- [ ] Short description is concise and accurate.
- [ ] README headings, tables, code blocks, and images render correctly.
- [ ] Hero and gallery images are correctly ordered.
- [ ] Repository and issue links work.
- [ ] Version number matches the VSIX being published.

## 10. Post-Publish Verification

After publication:

- [ ] Install `avenor.avenor` from the Marketplace in a clean VS Code profile.
- [ ] Confirm all ten themes appear in **Preferences: Color Theme**.
- [ ] Confirm the installed version matches the release.
- [ ] Confirm the Marketplace README and screenshots render correctly.
- [ ] Confirm repository, issue, license, and changelog links work from the listing.
- [ ] Create the corresponding GitHub release when applicable.

A release is complete only when the packaged extension, repository documentation, and public Marketplace presentation all describe the same product.
