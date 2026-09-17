# Contributing to Avenor

Thank you for helping improve Avenor. Keep changes focused, reproducible, and consistent with the project's principle: **Maximum Clarity, Minimum Noise.**

## Report a theme issue

Use the [Avenor theme issue form](https://github.com/mdmeraj-dev/avenor/issues/new?template=theme-report.yml). Include:

- the exact Avenor variant;
- VS Code and language-extension versions;
- whether semantic highlighting is enabled;
- a minimal code sample;
- the token scope from **Developer: Inspect Editor Tokens and Scopes**, when available;
- a real screenshot with private information removed.

## Propose a change

1. Create a focused branch.
2. Keep unrelated palette and formatting changes out of the diff.
3. Run `npm ci` and `npm test`.
4. Explain the affected theme, language, token role, and visual intent in the pull request.

The theme JSON files are locked release palettes. Do not reformat or alter them as part of documentation, tooling, or repository maintenance.
