import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/types';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input type tel', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="tel" />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns.tel)).toBe(true);
  });

  test('Testing correct pattern and type', () => {
    expect(input).toHaveAttribute('pattern', patterns.tel);
    expect(input).toHaveAttribute('type', 'tel');
    expect(input).toHaveAttribute('inputmode', 'tel');
  });

  test('Testing value: +389 70123456, validity true', () => {
    fireEvent.change(input, { target: { value: '+389 70123456' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: +1 (555) 123-4567, validity true', () => {
    fireEvent.change(input, { target: { value: '+1 (555) 123-4567' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 070 123 456, validity true', () => {
    fireEvent.change(input, { target: { value: '070 123 456' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: phone, validity false', () => {
    fireEvent.change(input, { target: { value: 'phone' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: +389 7012abc, validity false', () => {
    fireEvent.change(input, { target: { value: '+389 7012abc' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 123456, validity false', () => {
    fireEvent.change(input, { target: { value: '123456' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 1234567890123456, validity false', () => {
    fireEvent.change(input, { target: { value: '1234567890123456' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: +389--70123456, validity false', () => {
    fireEvent.change(input, { target: { value: '+389--70123456' } });
    expect(input.validity.valid).toBe(false);
  });
});
