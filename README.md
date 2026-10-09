# FormFusion

[![npm version](https://badge.fury.io/js/formfusion.svg)](https://badge.fury.io/js/formfusion)

The FormFusion library is a lightweight solution for managing forms in React that offers **built-in validation**, **optimsed form components** such as Input, Textarea, Select, **full accessibility** automatically applied and completely **customizable** look.

FormFusion is based on the native HTML validation and extends the native [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) to include:

- **alphanumeric**
- **alphabetic**
- **numeric**
- **username**
- **credit-card-number**
- **ccv**
- **uuid**
- **ssn**
- **...and many more** - See full list of types [here](https://formfusion.dev/docs/api/validation)

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

### Styled version (Optional)

FormFusion is unstyled by default. To use the styled version, import the styles into your main file. You can customize the default FormFusion theme by overriding the CSS variables or by applying your own class names to the FormFusion components. For more information on the defined theme, please refer to the styling [documentation](https://formfusion.dev/docs/api/styling).

```jsx
import 'formfusion/style.css';
```

### Using the built-in validation

#### 1. Validating using the 'Type' property

You can apply validation rules by passing the desired rule name to the <code>type</code> property. The full list of available rules can be found [here](https://formfusion.dev/docs/api/validation).

```jsx
import React from 'react';
import { Form, Input } from 'formfusion';

const MyForm = () => {
  const onSubmit = (data) => {
    console.log('Form submitted successfully', data);
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

#### 2. Validating using Rules

Alternatively, you can import the rules object and assign a specific rule to the <code>type</code> property.

```jsx
import React from 'react';
import { Form, Input, rules } from 'formfusion';

const MyForm = () => {
  const onSubmit = (data) => {
    console.log('Form submitted successfully', data);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input id="username" name="username" type={rules.username} required />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
```

#### 3. Combining validation rules

You can combine multiple validation rules for a single field using the combine function along with one of three operators: AND, OR, and NOR. You may use any of the provided rules from FormFusion or include your own valid regex.

```jsx
import React from 'react';
import { Form, Input, rules, combine } from 'formfusion';

const MyForm = () => {
  const onSubmit = (data) => {
    console.log('Form submitted successfully', data);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        id="username"
        name="username"
        required
        type={combine.and(rules.alphabetic, rules.minLetters(5), '\\d{1,5}')}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
```

Combined patterns are matched as a full match (equivalent to the native `pattern` attribute). If you omit the operator, `AND` is used by default.

#### 4. Textarea

```jsx
import React from 'react';
import { Form, Textarea } from 'formfusion';

const MyForm = () => {
  const onSubmit = (data) => {
    console.log('Form submitted successfully', data);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Textarea
        id="message"
        name="message"
        label="Message"
        rows={4}
        required
        helperText="Share your feedback with us."
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
```

#### 5. Select

```jsx
import React from 'react';
import { Form, Select } from 'formfusion';

const MyForm = () => {
  const onSubmit = (data) => {
    console.log('Form submitted successfully', data);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Select
        id="country"
        name="country"
        label="Country"
        required
        options={[
          { value: 'mk', label: 'Macedonia' },
          { value: 'us', label: 'United States' },
        ]}
        multiple
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
```

`Select` supports single and multiple selection (`multiple`) and works with the same `validation` prop as `Input`.

#### 6. Managing state with useForm and connect

`useForm` returns the form state and validation helpers, and `connect` binds them to plain native inputs:

```jsx
import React, { useRef } from 'react';
import { useForm, connect } from 'formfusion';

const SignupForm = () => {
  const formRef = useRef(null);
  const formConfig = useForm({
    formRef,
    initialValues: { username: '' },
  });

  const inputProps = connect(
    {
      ...formConfig,
      validateOnChange: true,
      validateOnBlur: true,
      controlled: true,
      onChange: (e) => formConfig.setFieldValue(e.target.name, e.target.value),
    },
    'username',
    { patternMismatch: 'Please enter a valid username.' },
    { placeholder: 'Enter username' }
  );

  return (
    <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" {...inputProps} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
```

Start managing your forms efficiently!

For detailed documentation and examples, please visit our [Documentation Page](https://formfusion.dev/docs).

---
