import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/types';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input type credit-card-number-amex', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="credit-card-number-amex"
          name="credit-card-number-amex"
          type="credit-card-number-amex"
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns['credit-card-number-amex'])).toBe(true);
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(
      patterns['credit-card-number-amex']
    );
  });

  test('Testing value: 341234567890123, validity true', () => {
    fireEvent.change(input, { target: { value: '341234567890123' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 371098765432109, validity true', () => {
    fireEvent.change(input, { target: { value: '371098765432109' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 340000000000000, validity true', () => {
    fireEvent.change(input, { target: { value: '340000000000000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 371098765432109, validity true', () => {
    fireEvent.change(input, { target: { value: '371098765432109' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 3712345678901234567, validity false', () => {
    fireEvent.change(input, { target: { value: '3712345678901234567' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 5512345678901234, validity false', () => {
    fireEvent.change(input, { target: { value: '5512345678901234' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 37123456789, validity false', () => {
    fireEvent.change(input, { target: { value: '37123456789' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 2012345678901234, validity false', () => {
    fireEvent.change(input, { target: { value: '2012345678901234' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 3712ABCD6789012, validity false', () => {
    fireEvent.change(input, { target: { value: '3712ABCD6789012' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 341234$67890123, validity false', () => {
    fireEvent.change(input, { target: { value: '341234$67890123' } });
    expect(input.validity.valid).toBe(false);
  });
});
