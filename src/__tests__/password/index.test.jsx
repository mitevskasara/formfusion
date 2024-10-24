import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/types';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input type password', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="password" name="password" type="password" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns.password)).toBe(true);
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(patterns.password);
  });

  test('Testing value: Passw0rd!, validity true', () => {
    fireEvent.change(input, { target: { value: 'Passw0rd!' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: SecureP@ss1, validity true', () => {
    fireEvent.change(input, { target: { value: 'SecureP@ss1' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: P@ssw0rd, validity true', () => {
    fireEvent.change(input, { target: { value: 'P@ssw0rd' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: S0m3P@ss, validity true', () => {
    fireEvent.change(input, { target: { value: 'S0m3P@ss' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: Sara1234!, validity true', () => {
    fireEvent.change(input, { target: { value: 'Sara1234!' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: password, validity false', () => {
    fireEvent.change(input, { target: { value: 'password' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 123Abc@, validity false', () => {
    fireEvent.change(input, { target: { value: '123Abc@' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 123456789, validity false', () => {
    fireEvent.change(input, { target: { value: '123456789' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: ABCDE1234, validity false', () => {
    fireEvent.change(input, { target: { value: 'ABCDE1234' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: abcdEFGH, validity false', () => {
    fireEvent.change(input, { target: { value: 'abcdEFGH' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: abc--dEFGH, validity false', () => {
    fireEvent.change(input, { target: { value: 'abc--dEFGH' } });
    expect(input.validity.valid).toBe(false);
  });
});
