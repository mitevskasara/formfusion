# FormFusion — Codebase Audit

Date: 2026-10-09
Scope: `src/**` (components, hooks, utils, constants, state, styles), `index.d.ts`, `package.json`, build config, tests, README.
Method: manual review + empirical reproduction. Baseline at start of work: `3173` tests passing.

Legend: **P0** crash/data-loss, **P1** broken feature/invalid output, **P2** correctness/a11y/maintenance.

---

## P0 — Critical

### 1. `required` Select throws on every selection

`src/components/Select.jsx:94-106` calls `onValidate` with a hand-built fake event whose
`target` has no `dataset`. `src/hooks/useFormHelpers.js:27` reads `e.target.dataset.pattern`
unguarded, so it throws `TypeError: Cannot read properties of undefined (reading 'pattern')`.

Reproduced by clicking the combobox and an option. Select has **no tests**, so this is untested.

### 2. Combined patterns are always invalid without an operator

`src/hooks/useFormHelpers.js:35-52` switches on `operator` with no `default`. When `operator`
is undefined, `matches` stays `undefined`, and `!matches` sets `"Invalid field."`.
Reproduced: `type={{ patterns: ['^\d+$'] }}` flags `"123"` as invalid.
Only `combine.and/or/nor` set an operator.

### 3. `connect()` throws for combined patterns

`src/utils/connect.js:9` — `type?.startsWith(...)` does not guard a missing method, so an object
`type` throws. Also `connect.js:26` never maps `password`/`ccv` to a hidden input.

### 4. Invalid regexes in `src/constants/regex.js`

`ISBN_13` (`:67`), `HSL` (`:59`), `HSL_COMMA` (`:60`), `HSL_SPACE` (`:62`) are syntactically
invalid and throw from `new RegExp(...)`. `BASE64` (`:47`) is URL-safe only, rejects real base64;
`BASE32` (`:45`) rejects lowercase; `BASE58` (`:46`) accepts the empty string.

### 5. `index.d.ts` does not compile

`index.d.ts:281-288` uses initializers in an ambient context:

```
TS1039 Initializers are not allowed in ambient contexts.
TS1183 An implementation cannot be declared in ambient contexts. (x3)
```

---

## P1 — Broken features / invalid output

### 6. Missing anchors in patterns (matters for the JS combine path)

Native `<input pattern>` is anchored by the browser, but `useFormHelpers.js:38-50` compiles
combined patterns with raw `new RegExp(...)`, so `EMAIL`, `TEL`,
`CREDIT_CARD_NUMBER_BASIC/HYPHEN/SPACE`, `FQDN` (unescaped dots), and `MASTERCARD`
(alternation precedence) all accept invalid substrings when used via `combine`.

### 7. `classes.field` produces malformed class strings

`src/components/Input.jsx:72-73` concatenates without a separator and duplicates the base class:
`"...--hidden-arrowsFormFusion-Input__root__field my-field"`.
`src/components/Textarea.jsx:40` yields `"FormFusion-Textarea__root__fieldmy-ta"`.

### 8. `Textarea` label never associated

`src/components/Textarea.jsx:44` uses `htmlFor={rest.name}` while the field uses `id`.
Reproduced: `label for="the-name"` vs `textarea id="the-id"`.

### 9. `maskInput` can throw

`src/utils/mask.js:3` — `mask.match(/[^#]/g)` is `null` for an all-`#` mask; mask literals are
interpolated into a `RegExp` character class without escaping (`]`, `\`, `^`, `-`).

### 10. Select accessibility / IDs

- Combobox has no `id`, yet `label htmlFor` and `aria-labelledby` (`Select.jsx:167,178`) point at it.
- Listbox id is hardcoded `FormFusion-select-list` (`:180`) — collides across instances.
- Offscreen required `<input aria-hidden="true">` (`:218-227`) is focusable (invalid) and receives a **string** `validation` (`:29,95`) where an object is expected (`SelectProps.validation?: CustomValidityValue`).

### 11. Custom validity messages mishandled

`useFormHelpers.js:55` reads `customValidity?.invalid`, but `validity.js` messages are keyed
`patternMismatch`; `:61` skips `customValidity` whenever combined patterns are present, so the
`validation` prop is ignored for combined fields.

---

## P2 — Accessibility

- Checkbox has **no visible focus indicator**: the real input is `opacity:0; height:0; width:0`
  (`src/style.css:115-121`) with no focus styling on the checkmark.
- `outline:none` everywhere with only a 1px border change on focus (`style.css:49-54`) — likely
  fails WCAG 2.4.7 / 2.4.11.
- Low-contrast text tokens: `--text-disabled:#00000073`, `--text-secondary:#000000ab`, and
  disabled fields using `--border-disabled-color:#d3d3d357` (`style.css:6-8,61-69`).
- Error/helper association is manual. Select's helper/error spans have no `id` and no
  `aria-describedby`/`aria-errormessage`. Missing `id` yields colliding `FormFusion-undefined-error`.
- Listbox keyboard model is non-standard: focus moves into the `<ul>` instead of using
  `aria-activedescendant`; the highlighted option is not announced.
- `onValidate` calls `e.preventDefault()` on `onInvalid` and never calls `reportValidity()`, so the
  native validation bubble is suppressed.
- README claims "full accessibility automatically applied" — not currently accurate.

---

## README / docs vs implementation

- Combine example (`README.md`) uses `combine.and(...)` but only imports `{ Form, Input, rules }`.
- Only `Input` is documented; `Select`, `Textarea`, `useForm`, `connect` are exported/typed but
  undocumented; `useForm`/`connect` lack combined-pattern and `aria-errormessage` support
  (`src/hooks/useForm.js:27-60`).
- "Validating using Rules" (`type={rules.username}`) won't produce curated messages because
  messages are looked up by type _name_, not by raw regex.
- CHANGELOG has version gaps and inconsistent repo URLs (`mitevskasara` vs `corelabui`).

---

## Security

- `npm audit --omit=dev` → **0 vulnerabilities** (no runtime dependencies shipped).
- Full toolchain audit → **57 vulns (46 high, 1 critical)** in dev-only transitive deps
  (`svgo` via cssnano, `ws`, `yaml`); not published.
- **ReDoS risk**: developer/user-supplied patterns compiled with raw `new RegExp` without
  sanitization/timeout; bundled `IPV6`/`HSL` patterns are complex.
- `parseEntries` (`src/utils/helpers.js:3-11`) `JSON.parse`s every submitted value; field names
  like `__proto__`/`constructor` are unguarded.
- No XSS sinks (`dangerouslySetInnerHTML`/`eval`) found.

---

## Outdated / maintenance

- Dependencies ~2 years behind: React 18.2 → 19.3, Jest 29 → 30, esbuild 0.18 → 0.28,
  Babel 7 → 8, testing-library 14 → 16.
- `package.json`: no `peerDependencies` (React should be one), no `files`/`exports`/`sideEffects`;
  `"module": "index.js"` points at the **CJS** bundle. No `prepare`/`prepublishOnly`.
- `esbuild.js`: `platform:"node"`, `target:"node14"` (EOL) for a browser React library; CJS only.
- No ESLint, no `typecheck` script, no CI, no coverage thresholds.
- **Test gaps**: 123 files target `Input`; none for `Select`, `Textarea`, `Form`, `useForm`,
  `connect`, `combine.or/nor`, controlled mode, or masking.

---

## Fix status

Tracked in the working session; see checklist below (updated as fixes land).

- [ ] #1 Select required crash
- [ ] #2 operator default
- [ ] #3 connect crash
- [ ] #4 invalid regexes
- [ ] #5 `index.d.ts`
- [ ] #6 pattern anchoring in combine path
- [ ] #7 `classes.field`
- [ ] #8 Textarea label
- [ ] #9 mask safety
- [ ] #10 Select ARIA
- [ ] #11 custom validity keys
- [ ] P2 focus outlines / contrast
- [ ] packaging (peerDeps, sideEffects, files)
- [ ] tests for new behavior
