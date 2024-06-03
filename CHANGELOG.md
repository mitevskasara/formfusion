## 1.1.8 (2024-06-03)

Bug fixes
- Uncaught ReferenceError: Cannot access 'resetForm' before initialization is fixed when using controlled version.

## 1.1.5 (2024-05-31)

Two new optional properties introduced in Input component:
- **hideArrows**: Whether or not to hide the default arrows of a type 'number' input
- **helperText**: Additional info text shown below the input field for a better user experience


One new optional property introduced in Textarea component:
- **helperText**: Additional info text shown below the input field for a better user experience

## 1.1.4 (2024-05-28)

Released styled version of the library

## 1.0.3 (2024-03-13)

Bug fixes

## 1.0.2 (2024-03-13)

Bug fixes

- Invalid pattern applied when using native input types is fixed

## 1.0.1 (2024-02-22)

**⚠ BREAKING CHANGES**

- setValues is renamed to setFieldValue.

Features

- Custom form values are allowed by using the [setFieldValue](https://www.corelabui.com/formfusion/api/useform#config-setFieldValue) method

Bug fixes

- Reseting controlled fields is fixed
