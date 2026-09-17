# Contributing to Avenor

Thank you for helping improve Avenor. Keep changes focused, reproducible, and consistent with the project principle: **Maximum Clarity, Minimum Noise.**

## Before You Start

Use the smallest contribution that solves the problem well. Avenor's theme files are intentional release palettes, so unrelated color, formatting, or generated-file changes should stay out of a contribution.

For visual or language-highlighting problems, open a [theme report](https://github.com/mdmeraj-dev/avenor/issues/new?template=theme-report.yml) before preparing a larger change when the correct fix is not obvious.

## Development Setup

Requirements:

- Visual Studio Code 1.90 or newer
- Node.js 22 or a compatible current release
- npm

Install dependencies and run the repository validation suite:

```bash
npm ci
npm test
```

Build the local VSIX when you need to inspect the packaged extension:

```bash
npm run package
```

The package is written to `dist/avenor-1.0.0.vsix`.

## Working on Theme Behavior

When a change affects syntax highlighting or workbench color:

1. Reproduce the issue in the relevant Avenor variant.
2. Record the VS Code version and language-extension version.
3. Check whether semantic highlighting is enabled.
4. Use **Developer: Inspect Editor Tokens and Scopes** to identify the active token information.
5. Test the smallest relevant fixture in `samples/` and, when practical, a real project using the same language extension.
6. Verify that the change does not degrade other semantic roles or related themes.

Do not treat a single grammar or extension as universal. VS Code highlighting may change depending on the TextMate grammar, semantic-token provider, and user configuration.

## Theme Palette Guardrail

Files under `themes/` are locked release palettes. Do not reformat or alter them as part of documentation, tooling, dependency, or repository-maintenance work.

If your contribution intentionally changes a palette, keep that change isolated and explain:

- the affected theme;
- the exact token or workbench role;
- the current behavior;
- the intended behavior;
- why the change improves clarity, hierarchy, or accessibility;
- what you tested after the change.

## Documentation Changes

Documentation should be concise, accurate, and aligned with the current package metadata. Avoid claims that depend on unpublished Marketplace state, missing screenshots, or unsupported features.

For screenshot changes, follow [docs/SCREENSHOTS.md](docs/SCREENSHOTS.md). Release screenshots must be real Visual Studio Code captures rather than mockups or generated editor imagery.

## Pull Request Checklist

Before opening a pull request:

- [ ] The change is focused and contains no unrelated formatting churn.
- [ ] `npm ci` completes successfully.
- [ ] `npm test` passes.
- [ ] `npm run package` succeeds when the change can affect packaging or Marketplace output.
- [ ] Theme changes were inspected in the affected language/theme combinations.
- [ ] Documentation links and file paths resolve.
- [ ] Screenshots contain no secrets, personal information, private repository names, or unrelated UI.
- [ ] The pull request explains what changed, why it changed, and how it was verified.

## Commit and Pull Request Style

Prefer short, descriptive commit messages such as:

```text
docs: clarify local VSIX installation
fix: correct SQL function token scope
chore: tighten validation metadata checks
```

A pull request should remain reviewable without requiring unrelated context. Small, well-scoped changes are easier to validate and safer to merge.
