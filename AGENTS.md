# AGENTS.md

Guidance for AI agents and contributors working on **FormFusion**, a React form library with built-in validation, built on native HTML constraint validation (`pattern`, `validity`, `setCustomValidity`).

## Project layout

```
src/
  index.js            Public entry point. Every public export goes through here.
  components/         Form, Input, Textarea, Select (.jsx)
  hooks/              useForm (public), useFormHelpers (internal shared logic)
  state/              useReducer actions + reducer
  context/            FormContext
  constants/          regex.js (source of truth for patterns), types.js, patterns.js (`rules`),
                      validity.js, nativeTypes.js, inputmodes.js, hidden.js
  utils/              combine, useConnect, mask, helpers
  style.css           Source styles (edit this file, not ./style.css)
  __tests__/          Jest + Testing Library suites, one folder per feature/pattern
index.d.ts            Hand-maintained TypeScript types (edit by hand)
index.js, index.mjs   Generated CJS/ESM bundles (esbuild). Don't edit by hand.
style.css             Generated, prefixed and minified CSS. Don't edit by hand.
```

## Commands

```bash
npm install
npm test               # jest (jsdom)
npm run lint           # eslint (flat config in eslint.config.mjs)
npm run typecheck      # tsc --noEmit over index.d.ts
npm run build          # prefix + minify CSS, then build index.js / index.mjs
npm run format         # prettier --write .
npm run check-format   # prettier --check .
```

Before you finish any change, run `npm run lint`, `npm run typecheck`, `npm run check-format` and `npm test`. CI (`.github/workflows/ci.yml`) runs all of them plus `npm run build` on every PR and on every push to `main`. Lint must have no errors, and new code shouldn't add warnings. If you touched `src/`, also run `npm run build` and commit the regenerated `index.js`, `index.mjs` and `style.css` with it.

## Code conventions

- **Language:** plain JavaScript and JSX. No TypeScript in `src/`. Babel (`preset-env`, `preset-react`) handles tests, and esbuild bundles for `browser` / `es2018`.
- **Formatting (Prettier):** single quotes, semicolons, 2-space indent, `es5` trailing commas. Don't fight the formatter. In `.prettierignore`, generated root files are anchored (`/index.js`), so `src/**/index.js` is still formatted. Keep it that way.
- **Linting (ESLint 9):** `@eslint/js` recommended, `react` and `react-hooks` rules. Prefix intentionally unused args and caught errors with `_` (`catch (_error)`). Comment empty catch blocks. Don't use redundant `Boolean(...)` casts.
- **Types:** `index.d.ts` is checked by `npm run typecheck` in strict mode, so keep it compiling.
- **Components:** function components with default exports, one per file in `src/components/`, named in PascalCase. Destructure props with defaults in the signature and pass the rest through with `...rest`. Use `forwardRef` where a ref is exposed (as `Form` does).
- **Hooks:** anything that calls a React hook must be named `use*` (e.g. `useConnect`, not `connect`) and must call hooks unconditionally, at the top level. Never put a hook call behind a ternary or an `if`.
- **Shared logic** goes in `useFormHelpers`. State changes go through `dispatch` with `ACTIONS` from `src/state/actions`, never through ad-hoc local state.
- **CSS class names** follow BEM with a `FormFusion-` prefix, e.g. `FormFusion-Input__root__field--checkbox`. User classes from `classes.*` / `className` are appended to the base class and never replace it.
- **Accessibility matters.** Keep labels associated (`htmlFor` / `id`, with `id` falling back to `name`), keep the `aria-describedby`, `aria-invalid` and `aria-errormessage` wiring, and keep visible focus styles.
- **Validation patterns:**
  - Add new regexes to `src/constants/regex.js` as `UPPER_SNAKE_CASE` string literals with escaped backslashes (`'\\d'`).
  - `types.js` derives kebab-case input types from them (`credit-card-number`), and `patterns.js` derives camelCase `rules` (`creditCardNumber`). Don't duplicate patterns by hand.
  - Escape user-supplied strings before interpolating them into regexes (see `equals` / `contains` in `patterns.js`).
  - Every pattern must compile with `new RegExp(`^(?:${pattern})$`)`.
- **Security:** don't assign through user-controlled keys (`__proto__`). Use `Object.defineProperty`, as `parseEntries` does.
- **Peer dependency:** `react >= 16.8`. Don't use APIs newer than hooks without guarding them, and don't add runtime dependencies. Country-specific data (postcodes, licence plates) lives in separate `@formfusion/*` packages.
- **Public API changes** need matching updates in `src/index.js`, `index.d.ts` and the README. Don't remove or rename a public export in a non-major release. Keep the old name as a deprecated alias (marked `/** @deprecated */` in `index.d.ts`), as `connect` → `useConnect` does.

## Tests

- Tests go in `src/__tests__/<feature>/<name>.test.jsx`, e.g. `postalCodes/DE.test.jsx` or `combine/and.test.jsx`. Shared helpers go in `src/__tests__/utils/`, which Jest doesn't run as tests.
- Follow the existing style: render a `<Form>` containing the component, get the field with `screen.getByTestId('input')`, call `fireEvent.change`, then assert on `input.validity.valid`. Name tests like `Testing value: <value>, validity true|false`.
- For new patterns, include an `isRegexPatternValid` check plus both valid and invalid sample values.
- Every bug fix should come with a regression test.

## Commit conventions

Releases are generated from commit messages by Release Please, so commits **must** follow [Conventional Commits](https://www.conventionalcommits.org/) with **lowercase** types: `type: short imperative description`, with no trailing period and an optional body. Older history uses capitalized types (`Fix:`, `Feat:`). Don't copy that style.

| Type        | Use for                                | Release effect |
| ----------- | -------------------------------------- | -------------- |
| `feat:`     | New feature or public API              | minor          |
| `fix:`      | Bug fix (including types/a11y fixes)   | patch          |
| `perf:`     | Performance improvement                | patch          |
| `docs:`     | README / documentation only            | none           |
| `style:`    | CSS / visual-only changes              | none           |
| `refactor:` | Refactor without behavior change       | none           |
| `test:`     | Tests only                             | none           |
| `build:`    | Build output, bundling, dependencies   | none           |
| `ci:`       | GitHub Actions / release configuration | none           |
| `chore:`    | Other maintenance                      | none           |

For a breaking change, use `feat!:` / `fix!:` or add a `BREAKING CHANGE:` footer. That triggers a major release, so prefer a deprecated alias over a break.

Examples:

- `feat: allow combining multiple validation patterns`
- `fix: Select id fallback and packaging nits`
- `build: regenerate style.css and library bundles`

Keep commits focused. Put regenerated bundles in the commit that caused them. Never commit `node_modules`, `.history`, `coverage` or `AUDIT.md`.

## Branches, versioning and releases

- Work on a branch, never directly on `main`. Existing branches are named by version (`1.2.2`) or by type (`fix/<topic>`, e.g. `fix/audit-priority-fixes`). Merge through pull requests.
- **Releases are automated by Release Please** (`.github/workflows/release-please.yml`, `release-please-config.json`, `.release-please-manifest.json`):
  1. Every push to `main` updates an open release PR that bumps `package.json`, `.release-please-manifest.json` and `CHANGELOG.md` based on the commits.
  2. Merging the release PR creates the `vX.Y.Z` tag and GitHub release, then calls `.github/workflows/publish.yml`. That workflow runs CI, checks that the tag matches `package.json`, builds, and runs `npm publish --provenance` through npm OIDC trusted publishing (no token) in the `npm` environment.
  - **Don't bump `version` or edit `CHANGELOG.md` by hand.** Release Please owns both.
  - `publish.yml` only runs when `release-please.yml` calls it. npm's trusted publisher is configured for `release-please.yml`, so if you rename that file, update the setting on npmjs.com too. To recover a failed publish, re-run the failed jobs of that Release Please run from the Actions tab. Don't push tags by hand or add other triggers to `publish.yml`, because npm will reject them.
- Commit `package-lock.json` along with any dependency change, and keep it portable (CI runs `npm ci` on Linux).
- Only the files listed in `package.json` → `files` ship to npm. Update that list and `exports` if you add a published artifact.
