import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/types';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input type ccv-amex', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="ccv-amex" name="ccv-amex" type="ccv-amex" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns['ccv-amex'])).toBe(true);
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(patterns['ccv-amex']);
  });

  test('Testing value: 1234, validity true', () => {
    fireEvent.change(input, { target: { value: '1234' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 9876, validity true', () => {
    fireEvent.change(input, { target: { value: '9876' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 0000, validity true', () => {
    fireEvent.change(input, { target: { value: '0000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 123, validity false', () => {
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 12345, validity false', () => {
    fireEvent.change(input, { target: { value: '12345' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: abcd, validity false', () => {
    fireEvent.change(input, { target: { value: 'abcd' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: !@#, validity false', () => {
    fireEvent.change(input, { target: { value: '!@#' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value:      , validity false', () => {
    fireEvent.change(input, { target: { value: '     ' } });
    expect(input.validity.valid).toBe(false);
  });
});
