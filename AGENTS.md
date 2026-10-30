# AGENTS.md

Guidance for AI agents and contributors working on **FormFusion**, a React form library built on native HTML constraint validation. Its focus is minimal, field-level re-renders, accessibility that is always correct, and zero dependencies with a minimal bundle.

## Goals

These five goals decide every design question. A change that works against one of them needs a very good reason. Say so explicitly in the PR.

1. **Minimal re-renders.** Rendering is never a side effect of using the form.
2. **Field-level re-renders only.** A field re-renders only when _its own_ value or _its own_ error changes. Typing in one field never re-renders another field or `<Form>`.
3. **Native validation first.** Validation is built on HTML constraint validation: `pattern`, `required`, `type`, `validity`, `setCustomValidity`, `checkValidity`. The browser's validity state is the source of truth. FormFusion adds patterns, messages and combinations on top of it and never replaces it with a JS-only validator.
4. **Accessibility always correct and present.** Every field has an associated label, and its error and helper text are linked to it. Its invalid state is announced. None of this is optional or opt-in, and every change has to keep it correct.
5. **Zero dependencies, minimal bundle.** No runtime `dependencies`, only the `react` peer dependency. Every byte shipped has to earn its place.

### How the goals translate into rules

- **State and rendering:**
  - Form state lives in one store per form (`src/state/store`). `<Form>` creates it, or uses `config.store` from `useForm`. Fields read it only through `useFormHelpers(name)`, which subscribes with `useStoreSelector` to their own value and error. Selectors return plain values or stable references, never new objects.
  - The context value stays stable (`useMemo`), so changing state never re-renders every field that reads the context.
  - Reducers return the same state object when an update changes nothing, so subscribers aren't notified.
  - Update state only in event handlers or effects, never during render.
  - Event handlers read the current state at the moment of the event and don't subscribe, so `<Form>` doesn't re-render.
- **Native validation:** don't block or replace native behaviour. Decide whether to submit with `form.checkValidity()`, not with JS `errors` state, which can be stale. Patterns must stay valid HTML `pattern` values.
- **Accessibility:**
  - Render `aria-invalid`, `aria-errormessage` and `aria-describedby` in JSX from state. Don't set them directly on the DOM, so React and user props can't overwrite them.
  - Error containers use `aria-live="polite"`. Labels use `htmlFor` / `id`, with the id falling back to `name`.
  - Keep visible focus styles and sufficient contrast.
  - `setCustomValidity` / `checkValidity` are the only direct DOM calls allowed, from event handlers.
  - `useConnect` requires `props.name` so it can render `aria-invalid` / `aria-errormessage` from state. Never read `ref.current` during render to find a field's name.
- **Zero dependencies and bundle size:**
  - `package.json` must have no `dependencies`. Write small helpers in-house instead of adding a package, even a tiny one, e.g. the subscription store.
  - Country-specific or rarely used data goes in separate optional `@formfusion/*` packages (postcodes, licence plates), not in the core bundle.
  - Keep code tree-shakeable: named ESM exports, no import-time side effects (`sideEffects` lists only `*.css`).
  - Current size: `index.mjs` is about 24.2 KB minified / 8.1 KB gzip, and `style.css` about 4.7 KB / 1.1 KB gzip. Check with `gzip -9c index.mjs | wc -c` after `npm run build`. State the size change in the PR, and justify any growth over ~0.5 KB gzip.
- **Tests guard the goals:**
  - The render-count tests in `src/__tests__/renders/` (`React.Profiler`) check that a change in one field doesn't re-render other fields or `<Form>`, and that repeating the same invalid value doesn't re-render. Changes to rendering or state must keep them passing. Extend them only when the behaviour they guard changes.
  - Field a11y (label association, `aria-invalid`, and `aria-errormessage` pointing at an existing error element) is asserted in the field's existing tests. Keep those assertions correct when a field changes.

**Known gaps (being fixed, don't copy them):**

- Reset doesn't restore `initialValues` or clear errors.
- After an error, `setCustomValidity` keeps the field invalid (`customError`) until it is validated again. A fixed field that is never blurred blocks the first submit.
- `useForm` / `config` mode keeps state in the parent's `useReducer`, so every change re-renders the parent and all its fields.

## Project layout

```
src/
  index.js            Public entry point. Every public export goes through here.
  components/         Form, Input, Textarea, Select (.jsx)
  hooks/              useForm (public), useFormHelpers(name) (per-field state + handlers),
                      useStoreSelector (subscribe to one value of the store)
  state/              store (createStore: getState/dispatch/subscribe), reducer, actions
  context/            FormContext
  constants/          regex.js (source of truth for patterns), types.js, patterns.js (`rules`),
                      validity.js, nativeTypes.js, inputmodes.js, hidden.js
  utils/              validate (shared field validation), combine, useConnect, mask, helpers
  style.css           Source styles (edit this file, not ./style.css)
  __tests__/          Jest + Testing Library suites, one folder per feature/pattern
index.d.ts            Hand-maintained TypeScript types (edit by hand)
index.js, index.mjs   Generated CJS/ESM bundles (esbuild). Git-ignored, never edit or commit.
style.css             Generated, prefixed and minified CSS. Git-ignored, never edit or commit.
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

Before you finish any change, run `npm run lint`, `npm run typecheck`, `npm run check-format` and `npm test`. CI (`.github/workflows/ci.yml`) runs all of them plus `npm run build` on every PR and on every push to `main`. Lint must have no errors, and new code shouldn't add warnings. If you touched `src/`, also run `npm run build` to check that it still builds and to measure the bundle size. The build output is git-ignored. `publish.yml` builds it fresh before every `npm publish`.

## Code conventions

- **Language:** plain JavaScript and JSX. No TypeScript in `src/`. Babel (`preset-env`, `preset-react`) handles tests, and esbuild bundles for `browser` / `es2018`.
- **Formatting (Prettier):** single quotes, semicolons, 2-space indent, `es5` trailing commas. Don't fight the formatter. In `.prettierignore`, generated root files are anchored (`/index.js`), so `src/**/index.js` is still formatted. Keep it that way.
- **Linting (ESLint 9):** `@eslint/js` recommended, `react` and `react-hooks` rules. Prefix intentionally unused args and caught errors with `_` (`catch (_error)`). Comment empty catch blocks. Don't use redundant `Boolean(...)` casts.
- **Types:** `index.d.ts` is checked by `npm run typecheck` in strict mode, so keep it compiling.
- **No comments, unless really needed.** Code explains itself through names and structure. Don't write comments that restate the code, narrate design intent ("Form never subscribes…"), or document constraints and edge cases ("Selectors must return plain values…", "Catch updates between render and subscribe"). Rules and rationale belong in `AGENTS.md`, tests or the commit message. The only allowed comments are:

  - JSDoc on the public API in `index.d.ts` (e.g. `/** @deprecated */`);
  - the comment lint requires in an intentionally empty `catch` block.

  If you think a comment is needed, try a clearer name, a small extracted function or a test first.

- **Components:** function components with default exports, one per file in `src/components/`, named in PascalCase. Destructure props with defaults in the signature and pass the rest through with `...rest`. Use `forwardRef` where a ref is exposed (as `Form` does).
- **Hooks:** anything that calls a React hook must be named `use*` (e.g. `useConnect`, not `connect`) and must call hooks unconditionally, at the top level. Never put a hook call behind a ternary or an `if`.
- **Validation** lives in one place: `validateField` in `src/utils/validate.js`. Both `useFormHelpers` (Form fields) and `useForm` (`useConnect`) call it. Never copy validation logic into a hook or component. Change `validateField` and test both paths.
- **Shared logic** goes in `useFormHelpers`. State changes go through `dispatch` with `ACTIONS` from `src/state/actions`, never through ad-hoc local state. See [Goals](#goals) for how fields may read state.
- **CSS class names** follow BEM with a `FormFusion-` prefix, e.g. `FormFusion-Input__root__field--checkbox`. User classes from `classes.*` / `className` are appended to the base class and never replace it.
- **Validation patterns:**
  - Add new regexes to `src/constants/regex.js` as `UPPER_SNAKE_CASE` string literals with escaped backslashes (`'\\d'`).
  - `types.js` derives kebab-case input types from them (`credit-card-number`), and `patterns.js` derives camelCase `rules` (`creditCardNumber`). Don't duplicate patterns by hand.
  - Escape user-supplied strings before interpolating them into regexes (see `equals` / `contains` in `patterns.js`).
  - Every pattern must compile with `new RegExp(`^(?:${pattern})$`)`.
- **Security:** don't assign through user-controlled keys (`__proto__`). Use `Object.defineProperty`, as `parseEntries` does.
- **Peer dependency:** `react >= 16.8`. Don't use APIs newer than hooks without guarding them, for example by choosing `React.useSyncExternalStore` or a fallback once at module level and passing `getServerSnapshot` so server rendering works. No runtime dependencies; see [Goals](#goals).
- **Public API changes** need matching updates in `src/index.js`, `index.d.ts` and the README. Don't remove or rename a public export in a non-major release. Keep the old name as a deprecated alias (marked `/** @deprecated */` in `index.d.ts`) until the next major release, then remove it.

## Tests

- Tests go in `src/__tests__/<feature>/<name>.test.jsx`, e.g. `postalCodes/DE.test.jsx` or `combine/and.test.jsx`. Shared helpers go in `src/__tests__/utils/`, which Jest doesn't run as tests.
- Follow the existing style: render a `<Form>` containing the component, get the field with `screen.getByTestId('input')`, call `fireEvent.change`, then assert on `input.validity.valid`. Name tests like `Testing value: <value>, validity true|false`.
- For new patterns, include an `isRegexPatternValid` check plus both valid and invalid sample values.
- **Don't over-test.** Every test must be meaningful and check exactly one important behaviour that nothing else already covers. Don't add tests that repeat another test with a different value, check implementation details or trivial code (e.g. that an unsubscribe function unsubscribes), or exist only to raise coverage.
- **When to add or update tests:**
  - **New feature:** add new tests, only if the feature needs them, and as few as cover its behaviour.
  - **Updated feature or bug fix:** update the feature's existing tests (add the failing case to them, fix their assertions) instead of creating new test files. Create a new test only when no existing test covers that feature.
  - **Refactor:** existing tests must keep passing unchanged. Don't add tests for a refactor.
- Rendering and a11y guarantees are covered as described in [Goals](#goals).

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
- `build: target es2018 for the browser bundles`

Keep commits focused. Never commit `node_modules`, `.history`, `coverage`, `AUDIT.md` or the build output (`/index.js`, `/index.mjs`, `/style.css`).

## Branches, versioning and releases

- Work on a branch, never directly on `main`. Name branches `type/topic` using the commit types, e.g. `feat/field-level-state`, `fix/select-crash`, `ci/release-please`. Never name a branch after a version: Release Please decides versions.
- Merge through pull requests, with a **merge commit or rebase merge**, so every conventional commit reaches `main` and shows up in the changelog. If you squash, the PR title becomes the only commit Release Please sees. It must then be a conventional commit (e.g. `feat!: …`), and any breaking change needs a `BREAKING CHANGE:` line in the PR description.
- **Releases are automated by Release Please** (`.github/workflows/release-please.yml`, `release-please-config.json`, `.release-please-manifest.json`):
  1. Every push to `main` updates an open release PR that bumps `package.json`, `.release-please-manifest.json` and `CHANGELOG.md` based on the commits.
  2. Merging the release PR creates the `vX.Y.Z` tag and GitHub release, then calls `.github/workflows/publish.yml`. That workflow runs CI, checks that the tag matches `package.json`, builds, and runs `npm publish --provenance` through npm OIDC trusted publishing (no token) in the `npm` environment.
  - **Don't bump `version` or edit `CHANGELOG.md` by hand.** Release Please owns both.
  - `publish.yml` only runs when `release-please.yml` calls it. npm's trusted publisher is configured for `release-please.yml`, so if you rename that file, update the setting on npmjs.com too. To recover a failed publish, re-run the failed jobs of that Release Please run from the Actions tab. Don't push tags by hand or add other triggers to `publish.yml`, because npm will reject them.
- Commit `package-lock.json` along with any dependency change, and keep it portable (CI runs `npm ci` on Linux with the latest Node 24 and npm). **Regenerate the lockfile only with npm 12 or newer** (`npm -v`). Older npm drops the optional `@emnapi/core` / `@emnapi/runtime` peer entries, and then `npm ci` in CI fails with `Missing: @emnapi/... from lock file`. Before you push a lockfile change, check it with `npx npm@latest ci`.
- Only the files listed in `package.json` → `files` ship to npm. Update that list and `exports` if you add a published artifact.
