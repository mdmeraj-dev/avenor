![Avenor icon](assets/avenor.png)

# Avenor

**Maximum Clarity. Minimum Noise.**

Premium VS Code themes crafted for clarity, character, and comfortable long coding sessions. Avenor pairs a coherent semantic syntax language with ten deliberately different workspace foundations: nine dark themes and one light theme.

[![License: MIT](https://img.shields.io/badge/license-MIT-6D7A8A.svg)](LICENSE)
[![VS Code 1.90+](https://img.shields.io/badge/VS%20Code-1.90%2B-5D91E8.svg)](https://code.visualstudio.com/)
[![GitHub stars](https://img.shields.io/github/stars/mdmeraj-dev/avenor?style=flat&logo=github)](https://github.com/mdmeraj-dev/avenor)

<!-- Real flagship screenshot slot: assets/screenshots/avenor-signature.png -->

## Avenor Signature

The flagship Avenor experience uses a balanced neutral-cool foundation, disciplined contrast, and subtle blue-gray depth. It is the recommended starting point for the collection.

<!-- Screenshot slot: assets/screenshots/avenor-signature.png -->

## Theme Collection

Every variant preserves Avenor's semantic intent while giving the workbench its own atmosphere.

| Theme | Foundation | Character |
| --- | --- | --- |
| **Avenor Signature** | Neutral cool graphite | Balanced, polished, and quietly dimensional |
| **Avenor Cobalt** | Deep cobalt blue | Rich, saturated, and crisply layered |
| **Avenor Charcoal** | Neutral charcoal | Understated, focused, and clean |
| **Avenor Gunmetal** | Cool metallic gray | Structured, modern, and substantial |
| **Avenor Indigo** | Blue-violet slate | Refined, atmospheric, and softly chromatic |
| **Avenor Ivory** | Cool white | Bright, precise, and restrained |
| **Avenor Jade** | Green charcoal | Mineral, calm, and subtly distinctive |
| **Avenor Navy** | Blue-black navy | Deep, composed, and low-glare |
| **Avenor Obsidian** | Near-black graphite | Minimal, concentrated, and finely layered |
| **Avenor Twilight** | Muted violet night | Soft, immersive, and atmospheric |

### Avenor Signature

A balanced graphite-blue workspace with refined contrast and measured visual depth.

<!-- Screenshot slot: assets/screenshots/avenor-signature.png -->

### Avenor Cobalt

A deep cobalt workspace with rich blue atmosphere and crisp surface separation.

<!-- Screenshot slot: assets/screenshots/avenor-cobalt.png -->

### Avenor Charcoal

A neutral charcoal environment built around understated depth and clean contrast.

<!-- Screenshot slot: assets/screenshots/avenor-charcoal.png -->

### Avenor Gunmetal

A cool metallic-gray workspace with clear structure and substantial mid-dark surfaces.

<!-- Screenshot slot: assets/screenshots/avenor-gunmetal.png -->

### Avenor Indigo

A refined blue-violet workspace with softened atmosphere and balanced separation.

<!-- Screenshot slot: assets/screenshots/avenor-indigo.png -->

### Avenor Ivory

A cool-white light theme with calm chrome, dark text, and precise visual hierarchy.

<!-- Screenshot slot: assets/screenshots/avenor-ivory.png -->

### Avenor Jade

A green-charcoal workspace with subtle mineral character and restrained depth.

<!-- Screenshot slot: assets/screenshots/avenor-jade.png -->

### Avenor Navy

A blue-black workspace with composed contrast and layered navy surfaces.

<!-- Screenshot slot: assets/screenshots/avenor-navy.png -->

### Avenor Obsidian

A refined near-black workspace with quiet graphite separation and minimal visual weight.

<!-- Screenshot slot: assets/screenshots/avenor-obsidian.png -->

### Avenor Twilight

A muted violet-night workspace with atmospheric depth and softened chrome.

<!-- Screenshot slot: assets/screenshots/avenor-twilight.png -->

## Why Avenor?

- **Controlled vibrancy** — expressive syntax without turning the editor into a rainbow.
- **Semantic clarity** — stable visual roles help related code constructs read as a system.
- **Surface hierarchy** — editors, sidebars, tabs, panels, inputs, and elevated widgets form deliberate depth layers.
- **Consistent identity** — variants feel related even when their foundations change significantly.
- **Long-session comfort** — contrast and saturation stay readable without making the palette lifeless.

## Design Philosophy

Avenor does not assign colors to syntax at random. Each theme starts with a carefully layered neutral or chromatic foundation, then applies a semantic hierarchy with controlled saturation. High-frequency code stays clear, comments remain readable without competing for attention, and accents are reserved for roles that benefit from distinction.

The same discipline extends beyond the editor. Workbench surfaces, terminal colors, Git and diff states, diagnostics, bracket pairs, notebooks, and elevated controls are coordinated as one system rather than treated as separate decorations.

## Syntax Language

The exact shades adapt to dark and light foundations, while the semantic roles remain recognizable:

| Color family | Primary roles |
| --- | --- |
| Purple | Keywords, control flow, declarations, tags, and selectors |
| Teal | Strings and regular expressions |
| Warm orange | Functions and methods |
| Green | Types, interfaces, classes, and structs |
| Blue | Properties, fields, built-ins, namespaces, and modules |
| Pink | Parameters, decorators, and annotations |
| Gold | Constants, enums, readonly values, and labels |
| Neutral foregrounds | Variables, object keys, numbers, operators, and punctuation |

Token appearance ultimately depends on the active language grammar and semantic-token provider. Use **Developer: Inspect Editor Tokens and Scopes** when diagnosing language-specific highlighting.

## Built for Real Code

The repository includes focused fixtures for TypeScript/TSX, JavaScript, Python, SQL, HTML, CSS, JSON, Markdown, Java, C++, C#, Go, and Rust. They exercise keywords, types, classes, functions, parameters, properties, constants, literals, punctuation, decorators, comments, and other common roles.

These fixtures support repeatable visual inspection; they do not replace testing with the language extensions used in your own projects.

## Installation

### Visual Studio Marketplace

After the 1.0.0 release is published, open the **Extensions** view with `Ctrl+Shift+X` and search for **Avenor**.

The confirmed extension ID is `avenor.avenor`:

```bash
code --install-extension avenor.avenor
```

### Manual VSIX

1. Open the **Extensions** view.
2. Choose **Views and More Actions** (`…`).
3. Select **Install from VSIX…**.
4. Choose `avenor-1.0.0.vsix`.

You can also install the local package from a terminal:

```bash
code --install-extension avenor-1.0.0.vsix
```

## Select a Theme

1. Open the Command Palette.
2. Run **Preferences: Color Theme**.
3. Select any Avenor variant.

Start with **Avenor Signature** for the flagship dark experience or **Avenor Ivory** for the light experience.

## Development

```bash
npm ci
npm test
npm run package
```

Validation checks the contributed theme list, locked palette hashes, theme structure, semantic and TextMate rule counts, representative contrast targets, required fixtures, metadata, and documentation links.

## Feedback

Found a problem or a language-specific highlighting edge case? [Open an issue](https://github.com/mdmeraj-dev/avenor/issues) and include the active Avenor theme, language extension, VS Code version, semantic-highlighting setting, and a minimal reproduction.

Improvement ideas are welcome when they preserve the collection's focus on clarity and restraint.

## Project Links

- [Source repository](https://github.com/mdmeraj-dev/avenor)
- [Issue tracker](https://github.com/mdmeraj-dev/avenor/issues)
- [Releases](https://github.com/mdmeraj-dev/avenor/releases)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release notes.

## License

Avenor is available under the [MIT License](LICENSE).

---

Designed around **Maximum Clarity, Minimum Noise.**
