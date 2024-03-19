# FormFusion by CoreLab UI

[![npm version](https://badge.fury.io/js/formfusion.svg)](https://badge.fury.io/js/formfusion)

The FormFusion library is an efficient and adaptable solution for handling forms with **built-in validation**, **full accessibility** and completely **customizable** look simplifying the development process and improving user experience.

FormFusion Leverages the native HTML validation and extends the native [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) to include:

- **alphanumeric**
- **alphabetic**
- **numeric**
- **username**
- **credit-card-number**
- **ccv**
- **uuid**
- **ssn**
- **...and many more** - See full list of types [here](https://www.corelabui.com/formfusion/api/types)

Additionally, FormFusion provides other more specific sets of validation rules such as rules for postcodes validaion, IBAN numbers validation, Licence plates validation etc.
These sets are not included in the formfusion package to ensure optimal size and performance but they can be installed separately.

List of available sets:

- [@formfusion/postcodes](https://www.npmjs.com/package/@formfusion/postcodes)
- [@formfusion/licence-plates](https://www.npmjs.com/package/@formfusion/licence-plates)
- [@formfusion/iban](https://www.npmjs.com/package/@formfusion/iban)
- [@formfusion/passports](https://www.npmjs.com/package/@formfusion/passports)
- [@formfusion/phones](https://www.npmjs.com/package/@formfusion/phones)
- [@formfusion/tin](https://www.npmjs.com/package/@formfusion/tin)
- [@formfusion/vat](https://www.npmjs.com/package/@formfusion/vat)

## Features

- **Efficiency:** Optimize your form-handling process this powerful, lightweight library.
- **Adaptability:** Easily integrate FormFusion into new or existing projects.
- **Out-of-the-Box Validation:** Use the built-in validation rules without hassle.
- **Customizable:** Tailor the UI to your specific needs and preferences.
- **No dependencies:** FormFusion is self-contained and it does not rely on any external dependencies

## Installation

You can install FormFusion via npm or yarn:

```bash
npm install formfusion
```

or

```bash
yarn add formfusion
```

## Usage

Example of using FormFusion for a simple uncontrolled form with username field with validation

```jsx
import React from "react";
import { Form, Input } from "formfusion";

const MyForm = () => {
  const onSubmit = (data) => {
    console.log("Form submitted successfully", data);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input id="username" name="username" type="username" required />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
```

Start managing your forms efficiently!

For detailed documentation and examples, please visit our [Documentation Page](https://www.corelabui.com/formfusion).

---

Made with ❤️ by CoreLab UI
