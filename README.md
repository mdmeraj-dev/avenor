<p align="center">
  <img src="assets/avenor.png" alt="Avenor logo" width="120" />
</p>

# Avenor Theme

**Maximum Clarity. Minimum Noise.**

Avenor is a family of ten refined Visual Studio Code color themes built around semantic clarity, deliberate surface hierarchy, controlled vibrancy, and comfortable long-session use. The collection includes nine dark themes and one light theme, with **Avenor Signature** as the flagship dark experience.

[![Version](https://img.shields.io/badge/version-1.0.0-6D7A8A.svg)](CHANGELOG.md)
[![Validate extension](https://github.com/mdmeraj-dev/avenor/actions/workflows/validate.yml/badge.svg)](https://github.com/mdmeraj-dev/avenor/actions/workflows/validate.yml)
[![VS Code 1.90+](https://img.shields.io/badge/VS%20Code-1.90%2B-5D91E8.svg)](https://code.visualstudio.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-6D7A8A.svg)](LICENSE)

<!-- Release hero: replace this comment with assets/screenshots/avenor-signature.png after the real VS Code capture is approved. -->

## At a Glance

| | |
| --- | --- |
| **Themes** | 10 total — 9 dark, 1 light |
| **Flagship** | Avenor Signature |
| **Light variant** | Avenor Ivory |
| **VS Code requirement** | 1.90 or newer |
| **Extension ID** | `avenor.avenor` |
| **License** | MIT |

## Theme Collection

Every variant preserves Avenor's semantic intent while giving the VS Code workbench a distinct atmosphere.

| Theme | Foundation | Character |
| --- | --- | --- |
| **Avenor Signature** | Neutral cool graphite | Balanced, polished, quietly dimensional |
| **Avenor Cobalt** | Deep cobalt blue | Rich, saturated, crisply layered |
| **Avenor Charcoal** | Neutral charcoal | Understated, focused, clean |
| **Avenor Gunmetal** | Cool metallic gray | Structured, modern, substantial |
| **Avenor Indigo** | Blue-violet slate | Refined, atmospheric, softly chromatic |
| **Avenor Ivory** | Cool white | Bright, precise, restrained |
| **Avenor Jade** | Green charcoal | Mineral, calm, subtly distinctive |
| **Avenor Navy** | Blue-black navy | Deep, composed, low-glare |
| **Avenor Obsidian** | Near-black graphite | Minimal, concentrated, finely layered |
| **Avenor Twilight** | Muted violet night | Soft, immersive, atmospheric |

<!-- Theme gallery slots. Add only real VS Code captures produced from docs/SCREENSHOTS.md. -->

## Why Avenor

- **Semantic clarity** — related code constructs keep recognizable visual roles instead of receiving arbitrary colors.
- **Controlled vibrancy** — syntax is expressive without turning the editor into a rainbow.
- **Surface hierarchy** — editor, sidebar, tabs, panels, inputs, widgets, selections, and borders form deliberate depth layers.
- **Consistent identity** — all ten variants feel like one family even when their foundations differ significantly.
- **Long-session comfort** — contrast and saturation are tuned for readability without making the palette lifeless.

## Visual Language

Avenor treats syntax and workbench color as one coordinated system. The exact shades adapt to each foundation, while the semantic roles remain recognizable.

| Color family | Primary semantic roles |
| --- | --- |
| Purple | Keywords, control flow, declarations, tags, selectors |
| Teal | Strings, regular expressions |
| Warm orange | Functions, methods |
| Green | Types, classes, interfaces, structs |
| Blue | Properties, fields, built-ins, namespaces, modules |
| Pink | Parameters, decorators, annotations |
| Gold | Constants, enums, readonly values, labels |
| Neutral foregrounds | Variables, object keys, numbers, operators, punctuation |

Token appearance ultimately depends on the active language grammar and semantic-token provider. For language-specific highlighting issues, use **Developer: Inspect Editor Tokens and Scopes** in VS Code.

## Built for Real Code

The repository includes repeatable visual-inspection fixtures for:

`TypeScript / TSX` · `JavaScript` · `Python` · `SQL` · `HTML` · `CSS` · `JSON` · `Markdown` · `Java` · `C++` · `C#` · `Go` · `Rust`

These fixtures exercise common semantic roles and make theme changes easier to inspect consistently. They complement, rather than replace, testing with the language extensions used in real projects.

## Installation

### Visual Studio Marketplace

When the extension is published to the Visual Studio Marketplace, open **Extensions** with `Ctrl+Shift+X`, search for **Avenor**, and install the extension published under the ID:

```text
avenor.avenor
```

CLI installation after publication:

```bash
code --install-extension avenor.avenor
```

### Local VSIX

Build the package from this repository:

```bash
npm ci
npm run package
```

Then install:

```bash
code --install-extension dist/avenor-1.0.0.vsix
```

You can also choose **Extensions → Views and More Actions (`…`) → Install from VSIX…** in VS Code.

## Select a Theme

1. Open the Command Palette.
2. Run **Preferences: Color Theme**.
3. Select any Avenor variant.

Start with **Avenor Signature** for the flagship dark experience or **Avenor Ivory** for the light experience.

## Development and Validation

```bash
npm ci
npm test
npm run package
```

The validation suite checks package metadata, contributed themes, locked palette integrity, theme structure, representative contrast targets, syntax-rule coverage, required fixtures, and documentation-critical project files. The GitHub Actions workflow runs validation and packages the VSIX on pushes to `main` and on pull requests.

The theme JSON files are release palettes. Documentation, tooling, and repository-maintenance changes should not reformat or alter them unless the change is intentionally about the palette itself.

## Contributing and Support

- Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing source changes.
- Use the [theme report form](https://github.com/mdmeraj-dev/avenor/issues/new?template=theme-report.yml) for visual, scope, contrast, or language-highlighting problems.
- Use the [improvement form](https://github.com/mdmeraj-dev/avenor/issues/new?template=improvement.yml) for focused theme or documentation ideas.
- Read [SUPPORT.md](SUPPORT.md) for the information needed to make a report reproducible.

## Documentation

- [Screenshot capture guide](docs/SCREENSHOTS.md) — exact release-gallery capture workflow and QA rules.
- [Release checklist](docs/RELEASE_CHECKLIST.md) — final validation, packaging, screenshots, metadata, and publication checks.
- [Changelog](CHANGELOG.md) — release history.

## Project Links

- [Repository](https://github.com/mdmeraj-dev/avenor)
- [Issues](https://github.com/mdmeraj-dev/avenor/issues)
- [Releases](https://github.com/mdmeraj-dev/avenor/releases)
- [Actions](https://github.com/mdmeraj-dev/avenor/actions)

## License

Avenor is available under the [MIT License](LICENSE).

---

Designed around **Maximum Clarity, Minimum Noise.**
