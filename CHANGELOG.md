## Changelog

### [1.1.13] - 2024-10-24

#### Features

- **Select Component**: Introduced a new `Select` component to enhance user input options. (Commit: [#d2f44b6](https://github.com/your-repo/commit/d2f44b6))
- **InputMode Enhancement**: Implemented `inputmode` attribute support and fixed patterns for password and email inputs for better validation. (Commit: [e15c72f5](https://github.com/your-repo/commit/e15c72f5))

#### Bug Fixes

- **Accessibility Improvements**: Enhanced accessibility features for error messages in `Input` and `Textarea` components to support better user experience. (Commits: [d96e0ce7](https://github.com/your-repo/commit/d96e0ce7), [faf371db](https://github.com/your-repo/commit/faf371db))

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

- Enabled custom form values through the newly defined `[setFieldValue](https://www.corelabui.com/formfusion/api/useform#config-setFieldValue)` method.

#### Bug Fixes

- Fixed issues related to resetting controlled fields.
