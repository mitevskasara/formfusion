## Changelog

## [2.0.0](https://github.com/mitevskasara/formfusion/compare/v1.2.1...v2.0.0) (2026-10-30)


### ⚠ BREAKING CHANGES

* onSubmit no longer JSON-parses field values. Text inputs are always submitted as strings, so numbers and booleans typed into fields are no longer converted. Fields that share a name are submitted as an array instead of only the last value.
* connect has been removed. Use useConnect instead.
* useConnect now requires a fourth argument with the input's name: useConnect(form, type, validation, { name: 'email' }).

### Features

* add useConnect hook and deprecate connect ([cdb8905](https://github.com/mitevskasara/formfusion/commit/cdb89058cce70d4325760d1eac7208d6f5c3a052))
* remove the deprecated connect export ([7243475](https://github.com/mitevskasara/formfusion/commit/7243475fb3810f82f1ee647f47cecc73812b08b7))
* render aria attributes from state and require name in useConnect ([b205f77](https://github.com/mitevskasara/formfusion/commit/b205f77d6dab520a2373df9c5dd90b33510194ea))
* type form values with an optional useForm generic ([0f74ae3](https://github.com/mitevskasara/formfusion/commit/0f74ae362009b59afaef611272e7a79c096afe67))


### Bug Fixes

* align the type declarations with the runtime API ([5751243](https://github.com/mitevskasara/formfusion/commit/57512437e8e7938678fbb5df372e7feb9455bd3d))
* avoid String.prototype.replaceAll so the bundle runs on es2018 browsers ([91e1f10](https://github.com/mitevskasara/formfusion/commit/91e1f10c3e9c2e7c204e9ea964fb6c6b5dfc6a86))
* bind checkboxes through checked so they can be unchecked ([0ed7e8b](https://github.com/mitevskasara/formfusion/commit/0ed7e8b9a4e30f1d4037670f5236766282847766))
* keep native validity current while typing so a fixed field submits on the first try ([624d47d](https://github.com/mitevskasara/formfusion/commit/624d47de056e81699049275b6bd3ccef4d410fc3))
* merge custom validation messages with the type's default messages ([a1c03d7](https://github.com/mitevskasara/formfusion/commit/a1c03d790b50189f6a3b2c833150be6d97554fa7))
* reset restores initial values and clears errors and custom validity ([7af4cbd](https://github.com/mitevskasara/formfusion/commit/7af4cbd976370a441e7b5806eedf2c0c4039d1ce))
* restore [@emnapi](https://github.com/emnapi) lockfile entries and stop CI checks after a failed install ([e97b486](https://github.com/mitevskasara/formfusion/commit/e97b486048069b1d40f9338cf9e212c9a5bab03e))
* share field validation between Form fields and useForm ([695cefc](https://github.com/mitevskasara/formfusion/commit/695cefcd5b5d135ae344932e397ca6e521cbf4a1))
* show the custom message of the first failing validity check ([5e13e46](https://github.com/mitevskasara/formfusion/commit/5e13e464f88a461bd3ba693e5cbeda4b68816943))
* submit field values as entered instead of parsing them as JSON ([3542ff5](https://github.com/mitevskasara/formfusion/commit/3542ff538140ea1fa764e9c2525a3662c135ad05))
* support combine() patterns and masks in useConnect ([7a4fd1e](https://github.com/mitevskasara/formfusion/commit/7a4fd1ef50632caf00fb504a2e6ade2598cd32a4))
* validate type="tel" with a generic phone pattern ([7dad86c](https://github.com/mitevskasara/formfusion/commit/7dad86cdefd87b8030963fc53e10e4da8fab1cc2))


### Performance Improvements

* share form state through a per-field subscription store ([5a75106](https://github.com/mitevskasara/formfusion/commit/5a75106dacba5cd5545d535c36e0fe7783630767))

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

- Enabled custom form values through the newly defined [setFieldValue](https://formfusion-eta.vercel.app/docs/api/useform#config-setFieldValue) method.

#### Bug Fixes

- Fixed issues related to resetting controlled fields.
