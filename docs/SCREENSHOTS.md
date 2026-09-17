# Avenor Screenshot Guide

Avenor's release gallery must use **real Visual Studio Code screenshots**. Do not substitute HTML mockups, generated editor imagery, palette approximations, or screenshots captured from unrelated projects.

The objective is simple: every image should make the theme itself the only meaningful variable.

## Capture Environment

1. Build and install `dist/avenor-1.0.0.vsix` in desktop Visual Studio Code.
2. Open this repository as the only workspace, preferably in a clean VS Code profile with unrelated extensions disabled.
3. Use the repository's `.vscode/settings.json` as the baseline workspace configuration.
4. Use the same installed monospace font for every capture.
5. Capture a 16:9 VS Code window at the same dimensions for the entire set; `2560 × 1440` is preferred.
6. Use 100% display scaling and `window.zoomLevel: 0`.

## Primary Gallery Scene

Use `samples/typescript.tsx` for all ten primary theme captures.

Keep the following visible and unchanged:

- Activity Bar
- primary Explorer
- editor tab
- breadcrumbs
- editor content
- minimap
- Status Bar

Keep the following hidden:

- Panel
- Secondary Side Bar
- notifications
- command palette or command-center popovers
- hover cards
- IntelliSense lists
- transient widgets

Keep the Explorer width, editor scroll position, cursor position, font, font size, line height, and window dimensions identical between captures.

Before each screenshot, confirm there are no:

- unsaved indicators;
- personal file-system paths;
- account details;
- private filenames or repositories;
- notifications;
- unrelated extension badges;
- distracting diagnostics;
- temporary UI overlays.

Switch only **Preferences: Color Theme**, wait for the workbench to settle, and capture the full VS Code window as PNG.

## Required Gallery Files

Save these ten images under `assets/screenshots/`:

| Theme | Filename |
| --- | --- |
| Avenor Signature | `avenor-signature.png` |
| Avenor Cobalt | `avenor-cobalt.png` |
| Avenor Charcoal | `avenor-charcoal.png` |
| Avenor Gunmetal | `avenor-gunmetal.png` |
| Avenor Indigo | `avenor-indigo.png` |
| Avenor Ivory | `avenor-ivory.png` |
| Avenor Jade | `avenor-jade.png` |
| Avenor Navy | `avenor-navy.png` |
| Avenor Obsidian | `avenor-obsidian.png` |
| Avenor Twilight | `avenor-twilight.png` |

Use `avenor-signature.png` as the README hero. Do not create a duplicate hero asset.

## Optional Language Previews

Only add secondary language screenshots after the ten-theme gallery is complete and approved.

Recommended files:

- `avenor-signature-python.png` from `samples/python.py`
- `avenor-signature-sql.png` from `samples/analytics.sql`
- `avenor-signature-html-css.png` with `samples/index.html` and `samples/styles.css` in a fixed split editor

Keep **Avenor Signature** active for these captures so the language comparison does not become a theme comparison.

## README Integration

The README currently contains two screenshot comments:

- a release-hero comment directly below the badges;
- a theme-gallery comment below the collection table.

After the real images are visually approved, replace the hero comment with:

```markdown
![Avenor Signature in Visual Studio Code](assets/screenshots/avenor-signature.png)
```

Replace the gallery comment with the approved gallery layout. If using a simple vertical layout, use:

```markdown
### Avenor Signature
![Avenor Signature in Visual Studio Code](assets/screenshots/avenor-signature.png)

### Avenor Cobalt
![Avenor Cobalt in Visual Studio Code](assets/screenshots/avenor-cobalt.png)

### Avenor Charcoal
![Avenor Charcoal in Visual Studio Code](assets/screenshots/avenor-charcoal.png)

### Avenor Gunmetal
![Avenor Gunmetal in Visual Studio Code](assets/screenshots/avenor-gunmetal.png)

### Avenor Indigo
![Avenor Indigo in Visual Studio Code](assets/screenshots/avenor-indigo.png)

### Avenor Ivory
![Avenor Ivory in Visual Studio Code](assets/screenshots/avenor-ivory.png)

### Avenor Jade
![Avenor Jade in Visual Studio Code](assets/screenshots/avenor-jade.png)

### Avenor Navy
![Avenor Navy in Visual Studio Code](assets/screenshots/avenor-navy.png)

### Avenor Obsidian
![Avenor Obsidian in Visual Studio Code](assets/screenshots/avenor-obsidian.png)

### Avenor Twilight
![Avenor Twilight in Visual Studio Code](assets/screenshots/avenor-twilight.png)
```

Because Signature is already the hero, it is acceptable to omit the repeated Signature image from the gallery if the final README reads better without duplication.

## Image QA

Every primary gallery image must pass all of these checks:

- [ ] Identical pixel dimensions across all ten captures.
- [ ] Only the active Avenor theme changes between images.
- [ ] Text remains sharp at GitHub and Marketplace display widths.
- [ ] The image contains no secrets, personal data, private repositories, or unrelated UI.
- [ ] PNG compression is lossless or visually lossless.
- [ ] The editor scene represents real syntax highlighting from the installed extension.
- [ ] Each README image path resolves correctly.
- [ ] The light-theme screenshot is checked separately for washed-out borders, low-contrast chrome, and invisible states.
- [ ] The darkest themes are checked separately for crushed surface hierarchy and indistinguishable panels.

## Final Rule

Do not publish placeholder imagery simply to fill the gallery. A missing screenshot is preferable to a misleading one; release imagery should represent the actual extension users will install.
