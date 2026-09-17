# Avenor Support

Use GitHub Issues for confirmed problems, focused improvement suggestions, and language-specific highlighting reports.

## Report a Theme Problem

Use the [Avenor theme report form](https://github.com/mdmeraj-dev/avenor/issues/new?template=theme-report.yml) for:

- incorrect or unexpected syntax highlighting;
- low-contrast text or UI states;
- hard-to-distinguish workbench surfaces;
- token-scope or semantic-highlighting problems;
- theme-specific visual regressions.

Before opening the report, collect:

1. the exact Avenor theme;
2. your VS Code version;
3. the relevant language extension and version;
4. whether semantic highlighting is enabled;
5. the smallest code sample that reproduces the behavior;
6. output from **Developer: Inspect Editor Tokens and Scopes**, when relevant;
7. a real screenshot with secrets and private information removed.

Theme appearance can vary with the active TextMate grammar, semantic-token provider, extension configuration, and user settings. Those details are important for distinguishing a theme issue from language-extension behavior.

## Suggest an Improvement

Use the [improvement form](https://github.com/mdmeraj-dev/avenor/issues/new?template=improvement.yml) for focused ideas affecting a theme, documentation, or repository workflow.

Describe the problem the change would solve and identify the affected theme, language, token role, or documentation section when applicable.

## Contributing a Fix

Read [CONTRIBUTING.md](CONTRIBUTING.md) before preparing source changes.

At minimum, run:

```bash
npm ci
npm test
```

When the change can affect packaging or Marketplace output, also run:

```bash
npm run package
```

Keep unrelated palette, formatting, dependency, and documentation changes out of the same pull request whenever practical.

## Security and Private Information

Do not post credentials, access tokens, private repository content, personal file-system paths, or other sensitive information in issues or screenshots. Redact or reproduce the problem in a minimal public sample before submitting it.
