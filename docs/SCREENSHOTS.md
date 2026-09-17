# Avenor Screenshot Guide

The release gallery must use real Visual Studio Code screenshots. Do not substitute HTML mockups, generated editor imagery, or palette approximations.

## Capture setup

1. Install `dist/avenor-1.0.0.vsix` in desktop Visual Studio Code.
2. Open this repository as the only workspace, preferably in a clean VS Code profile with unrelated extensions disabled.
3. Open `samples/typescript.tsx` and keep it as the only visible editor tab.
4. Use a 16:9 VS Code window at the same size for every capture; `2560 × 1440` is preferred.
5. Use 100% display scaling and `window.zoomLevel: 0`.
6. Keep the Activity Bar, primary Explorer, editor tabs, breadcrumbs, minimap, and Status Bar visible.
7. Hide the Panel, Secondary Side Bar, notifications, command center popovers, and all transient widgets.
8. Keep the Explorer width, editor scroll position, cursor position, font, font size, and line height identical.
9. Confirm there are no unsaved indicators, personal paths, account details, private filenames, notifications, unrelated extension badges, or distracting diagnostics.
10. Switch only **Preferences: Color Theme**, wait for the workbench to settle, and capture the full VS Code window as PNG.

The repository's `.vscode/settings.json` supplies the repeatable editor and workbench settings. Use the same installed monospace font for the full set.

## Required gallery files

Save these ten images in `assets/screenshots/`:

| Theme | Filename |
| --- | --- |
| Avenor Cobalt | `avenor-cobalt.png` |
| Avenor Charcoal | `avenor-charcoal.png` |
| Avenor Gunmetal | `avenor-gunmetal.png` |
| Avenor Indigo | `avenor-indigo.png` |
| Avenor Ivory | `avenor-ivory.png` |
| Avenor Jade | `avenor-jade.png` |
| Avenor Navy | `avenor-navy.png` |
| Avenor Obsidian | `avenor-obsidian.png` |
| Avenor Signature | `avenor-signature.png` |
| Avenor Twilight | `avenor-twilight.png` |

Use `avenor-signature.png` as the README hero as well as its gallery image; do not create a duplicate hero asset.

## Optional language previews

If a smaller language section is desired, keep **Avenor Signature** active and capture only these additional files:

- `avenor-signature-python.png` from `samples/python.py`
- `avenor-signature-sql.png` from `samples/analytics.sql`
- `avenor-signature-html-css.png` with `samples/index.html` and `samples/styles.css` in a fixed split editor

The ten-theme gallery remains the priority.

## README insertion map

After visually inspecting every image, replace the matching screenshot-slot comments in `README.md` with these Markdown lines:

```markdown
![Avenor Signature in Visual Studio Code](assets/screenshots/avenor-signature.png)
![Avenor Cobalt in Visual Studio Code](assets/screenshots/avenor-cobalt.png)
![Avenor Charcoal in Visual Studio Code](assets/screenshots/avenor-charcoal.png)
![Avenor Gunmetal in Visual Studio Code](assets/screenshots/avenor-gunmetal.png)
![Avenor Indigo in Visual Studio Code](assets/screenshots/avenor-indigo.png)
![Avenor Ivory in Visual Studio Code](assets/screenshots/avenor-ivory.png)
![Avenor Jade in Visual Studio Code](assets/screenshots/avenor-jade.png)
![Avenor Navy in Visual Studio Code](assets/screenshots/avenor-navy.png)
![Avenor Obsidian in Visual Studio Code](assets/screenshots/avenor-obsidian.png)
![Avenor Twilight in Visual Studio Code](assets/screenshots/avenor-twilight.png)
```

The first Signature slot is the hero. Keep the second Signature slot only if repeating the image in the gallery improves the final reading flow; otherwise link the gallery heading back to the hero.

## Final QA

- All gallery images have identical pixel dimensions.
- Only the active Avenor theme changes between the ten primary images.
- Text is sharp at GitHub and Marketplace widths.
- No image contains secrets, personal data, private repositories, or unrelated UI.
- PNG compression is lossless or visually lossless.
- Every README image path resolves before packaging.
