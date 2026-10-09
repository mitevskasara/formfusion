## Changelog

### [1.2.0] - 2026-10-09

#### Features

- **Dual ESM/CJS Builds**: FormFusion now ships `index.js` (CommonJS) and `index.mjs` (ESM) behind a scoped `exports` map, builds for the browser platform, and declares `react` as a peer dependency. (Commits: [c7f20c5](https://github.com/mitevskasara/formfusion/commit/c7f20c5), [13a88cc](https://github.com/mitevskasara/formfusion/commit/13a88cc))
- **Select id fallback**: `Select` now falls back to the `name` prop for its id, label reference, and ARIA ids — consistent with `Input` and `Textarea`. (Commit: [640a9fa](https://github.com/mitevskasara/formfusion/commit/640a9fa))

#### Bug Fixes

- **Select required validation**: selecting an option in a required `Select` no longer throws.
- **Combined validation patterns**: patterns now default to the `AND` operator and are matched as a full match, consistent with the native `pattern` attribute.
- **Invalid regexes**: corrected `ISBN-13`, `HSL`, `HSL comma/space`, `BASE32`, `BASE58`, `BASE64`, and `FQDN` patterns. (Commit: [438ecb9](https://github.com/mitevskasara/formfusion/commit/438ecb9))
- **Custom validation messages**: `patternMismatch` messages are now applied to combined fields.
- **`classes.field`**: extra classes join with a separator and the base class is not duplicated; `Textarea` labels are correctly associated with the textarea.
- **Masking**: all-`#` masks and regex-special mask literals no longer throw.
- **`connect()`**: no longer throws for combined patterns and maps `password`/`ccv` to `type="password"`.
- **`index.d.ts`**: removed invalid ambient initializers; `connect` signature updated.
- **Accessibility**: visible focus outlines, a checkbox focus ring, improved contrast tokens, and `Select` ARIA wiring (`aria-expanded`, `aria-controls`, `aria-activedescendant`, `aria-invalid`, `aria-errormessage`).
- **Prototype pollution**: `parseEntries` no longer assigns through `__proto__` and uses `Object.defineProperty` for parsed form values.

#### Documentation

- README now documents `Textarea`, `Select`, combined rules, and `useForm`/`connect`. (Commit: [ea8ed37](https://github.com/mitevskasara/formfusion/commit/ea8ed37))

### [1.1.18] - 2024-10-28

#### Features

- **Combined Validation Patterns**: Added functionality to allow the combination of multiple validation patterns for improved flexibility. (Commit: [#f605302](https://github.com/mitevskasara/formfusion/commit/f605302))

### [1.1.13] - 2024-10-24

#### Features

- **Select Component**: Introduced a new `Select` component to enhance user input options. (Commit: [#d2f44b6](https://github.com/mitevskasara/formfusion/commit/d2f44b6))
- **InputMode Enhancement**: Implemented `inputmode` attribute support and fixed patterns for password and email inputs for better validation. (Commit: [e15c72f5](https://github.com/mitevskasara/formfusion/commit/e15c72f5))

#### Bug Fixes

- **Accessibility Improvements**: Enhanced accessibility features for error messages in `Input` and `Textarea` components to support better user experience. (Commits: [d96e0ce7](https://github.com/mitevskasara/formfusion/commit/d96e0ce7), [faf371db](https://github.com/mitevskasara/formfusion/commit/faf371db))

### [1.1.9] - 2024-06-03

#### Bug Fixes

- Fixed an **uncaught ReferenceError** related to `resetForm` when using a controlled version.
- Resolved a **TypeError** indicating that `onValidate` is not a function when `validateOnChange` is enabled.

### [1.1.5] - 2024-05-31

#### Features

- Introduced two new optional properties in the `Input` component:
  - **hideArrows**: Allows users to hide the default arrows of a type 'number' input.
  - **helperText**: Provides additional information below the input field for enhanced user experience.
- Added a new optional property in the `Textarea` component:
  - **helperText**: Similar functionality as in the `Input` component for better user guidance.

### [1.1.4] - 2024-05-28

- Released a styled version of the library to improve visual presentation and usability.

### [1.0.3] - 2024-03-13

#### Bug Fixes

- Various bug fixes to enhance overall functionality.

### [1.0.2] - 2024-03-13

#### Bug Fixes

- Resolved an issue with an invalid pattern applied when using native input types.

### [1.0.1] - 2024-02-22

#### ⚠ BREAKING CHANGES

- Renamed `setValues` to `setFieldValue`.

#### Features

- Enabled custom form values through the newly defined [setFieldValue](https://formfusion.dev/docs/api/useform#config-setFieldValue) method.

#### Bug Fixes

- Fixed issues related to resetting controlled fields.
