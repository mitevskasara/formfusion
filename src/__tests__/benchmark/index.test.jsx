import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../components/Input';
import Form from '../../components/Form';

const measureRenderTime = (Component, props, iterations = 1000) => {
  let totalRenderTime = 0;

  for (let i = 0; i < iterations; i++) {
    const startTime = performance.now();
    render(
      <Form onSubmit={(data) => console.log(data)} className="form">
        <Component {...props} />
      </Form>
    );
    const endTime = performance.now();
    totalRenderTime += endTime - startTime;
  }

  return totalRenderTime / iterations;
};

test('Input component renders efficiently', () => {
  const renderTime = measureRenderTime(Input, {
    name: 'firstName',
    type: 'alphabetic',
    label: 'First Name',
    required: true,
    classes: {
      root: 'form__input',
      field: 'form__input-field',
      error: 'form__input-field__error',
      label: 'form__input-field__label',
    },
  });

  console.log(`Average render time: ${renderTime} milliseconds`);
});
