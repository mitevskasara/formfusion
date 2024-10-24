import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/types';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input type credit-card-number-basic', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="credit-card-number-basic"
          name="credit-card-number-basic"
          type="credit-card-number-basic"
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns['credit-card-number-basic'])).toBe(
      true
    );
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(
      patterns['credit-card-number-basic']
    );
  });

  test('Testing value: 1234567890123456, validity true', () => {
    fireEvent.change(input, { target: { value: '1234567890123456' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 9876543210123456, validity true', () => {
    fireEvent.change(input, { target: { value: '9876543210123456' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 0000000000000000, validity true', () => {
    fireEvent.change(input, { target: { value: '0000000000000000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 1232 232, validity false', () => {
    fireEvent.change(input, { target: { value: '1232 232' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 123456789012345, validity false', () => {
    fireEvent.change(input, { target: { value: '123456789012345' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 98765432101234567, validity false', () => {
    fireEvent.change(input, { target: { value: '98765432101234567' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: abcdefgh12345678, validity false', () => {
    fireEvent.change(input, { target: { value: 'abcdefgh12345678' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: !@#notdigits1234, validity false', () => {
    fireEvent.change(input, { target: { value: '!@#notdigits1234' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value:      , validity false', () => {
    fireEvent.change(input, { target: { value: '     ' } });
    expect(input.validity.valid).toBe(false);
  });
});
