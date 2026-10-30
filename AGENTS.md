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
npm run build          # prefix + minify CSS, then build index.js / index.mjs
npm run format         # prettier --write .
npm run check-format   # prettier --check .
```

Before you finish any change, run `npm test` and `npm run check-format`. If you touched `src/`, also run `npm run build` and commit the regenerated `index.js`, `index.mjs` and `style.css` with it.

## Code conventions

- **Language:** plain JavaScript and JSX. No TypeScript in `src/`. Babel (`preset-env`, `preset-react`) handles tests, and esbuild bundles for `browser` / `es2018`.
- **Formatting (Prettier):** single quotes, semicolons, 2-space indent, `es5` trailing commas. Don't fight the formatter.
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

Format: `Type: short imperative description`, with a capitalized type and a lowercase description, no trailing period, and an optional body.

| Type     | Use for                                                    |
| -------- | ---------------------------------------------------------- |
| `Feat:`  | New feature or public API                                  |
| `Fix:`   | Bug fix (including types/a11y fixes)                       |
| `Chore:` | Deps, build output, version bumps, changelog, CI, lockfile |
| `Docs:`  | README / documentation only                                |
| `Style:` | CSS / visual-only changes                                  |
| `Ref:`   | Refactor without behavior change                           |
| `Perf:`  | Performance improvement                                    |
| `Test:`  | Tests only                                                 |

Examples from history:

- `Feat: allow combining multiple validation patterns`
- `Fix: Select id fallback and packaging nits`
- `Chore: regenerate style.css and library bundles`

Keep commits focused. Put regenerated bundles in their own `Chore:` commit or in the commit that caused them. Never commit `node_modules`, `.history` or `AUDIT.md`.

## Branches, versioning and releases

- Work on a branch, never directly on `main`. Existing branches are named by version (`1.2.2`) or by type (`fix/<topic>`, e.g. `fix/audit-priority-fixes`). Merge through pull requests.
- **Pushing to `main` publishes to npm automatically** (`.github/workflows/publish.yml`, OIDC trusted publishing: `npm ci`, then build, test and `npm publish --provenance`). So before anything lands on `main`:
  - bump `version` in `package.json` (semver; npm rejects a version that's already published),
  - add an entry at the top of `CHANGELOG.md` in the existing format: `### [x.y.z] - YYYY-MM-DD`, then `#### Features` / `#### Bug Fixes` / `#### Documentation` sections with bold item titles and commit links,
  - make sure `npm run build` and `npm test` pass.
- Commit `package-lock.json` along with any dependency change, and keep it portable (CI runs `npm ci` on Linux).
- Only the files listed in `package.json` → `files` ship to npm. Update that list and `exports` if you add a published artifact.
