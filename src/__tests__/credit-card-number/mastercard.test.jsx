import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/types';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input type credit-card-number-mastercard', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="credit-card-number-mastercard"
          name="credit-card-number-mastercard"
          type="credit-card-number-mastercard"
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns['credit-card-number-mastercard'])).toBe(
      true
    );
  });

  test.each([
    ['5555555555554444', true],
    ['5105105105105100', true],
    ['2221000000000009', true],
    ['2720990000000000', true],
    ['5123', false],
    ['5612345678901234', false],
    ['2220000000000000', false],
    ['555555555555444', false],
  ])('Testing value: %s, validity %s', (value, valid) => {
    fireEvent.change(input, { target: { value } });
    expect(input.validity.valid).toBe(valid);
  });
});
