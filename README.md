# React Form Manager by CoreLab UI
[![npm version](https://badge.fury.io/js/@corelabui%2Frfm.svg)](https://badge.fury.io/js/@corelabui%2Frfm)

Effortlessly manage forms in your React applications with the React Form Manager powered by CoreLab UI.
This library provides an efficient and adaptable solution for handling forms with **built-in validation**, **full accessibility** and completely **customizable** look simplifying the development process and improving user experience.

RFM Leverages the native HTML validation and extends the native [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) to include:
- **alphanumeric**
- **alphabetic**
- **numeric**
- **username**
- **credit-card-number**
- **ccv**
- **postal-code**
- **uuid**
- **ssn**
- **...and many more** - See full list of types [here](https://corelabui.com/forms/patterns)

## Features

- **Efficiency:** Optimize your form-handling process this powerful, lightweight library.
- **Adaptability:** Easily integrate React Form Manager into new or existing projects.
- **Out-of-the-Box Validation:** Use the built-in validation rules without hassle.
- **Customizable:** Tailor the UI to your specific needs and preferences.
- **No dependencies:** RFM is self-contained and it does not rely on any external dependencies

## Installation

You can install React Form Manager via npm or yarn:

```bash
npm install @corelabui/rfm
```

or

```bash
yarn add @corelabui/rfm
```

## Usage

Example of using React Form Manager for a simple uncontrolled form with username field with validation

```jsx
import React from "react";
import { Form, Input } from "@corelabui/rfm";

const MyForm = () => {
  const onSubmit = (data) => {
    console.log("Form submitted successfully", data);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        id="username"
        name="username"
        type="username"
        required
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
```

Start managing your forms efficiently!

For detailed documentation and examples, please visit our [Documentation Page](https://corelabui.com/forms).

---

Made with ❤️ by CoreLab UI
