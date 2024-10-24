import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/types';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input type credit-card-number-hyphen', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="credit-card-number-hyphen"
          name="credit-card-number-hyphen"
          type="credit-card-number-hyphen"
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns['credit-card-number-hyphen'])).toBe(
      true
    );
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(
      patterns['credit-card-number-hyphen']
    );
  });

  test('Testing value: 1234-5678-9012-3456, validity true', () => {
    fireEvent.change(input, { target: { value: '1234-5678-9012-3456' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 9876-5432-1098-7654, validity true', () => {
    fireEvent.change(input, { target: { value: '9876-5432-1098-7654' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 0000-1111-2222-3333, validity true', () => {
    fireEvent.change(input, { target: { value: '0000-1111-2222-3333' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 1234567890123456, validity false', () => {
    fireEvent.change(input, { target: { value: '1234567890123456' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 9876-54321098-7654, validity false', () => {
    fireEvent.change(input, { target: { value: '9876-54321098-7654' } });
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
