import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/types';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input type credit-card-number-dinersclub', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="credit-card-number-dinersclub"
          name="credit-card-number-dinersclub"
          type="credit-card-number-dinersclub"
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns['credit-card-number-dinersclub'])).toBe(
      true
    );
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(
      patterns['credit-card-number-dinersclub']
    );
  });

  test('Testing value: 36227206271667, validity true', () => {
    fireEvent.change(input, { target: { value: '36227206271667' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 3056930009020004, validity true', () => {
    fireEvent.change(input, { target: { value: '3056930009020004' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 30521234567823, validity true', () => {
    fireEvent.change(input, { target: { value: '30521234567823' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 36111234567823, validity true', () => {
    fireEvent.change(input, { target: { value: '36111234567823' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 201212345678, validity false', () => {
    fireEvent.change(input, { target: { value: '201212345678' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 401212345678, validity false', () => {
    fireEvent.change(input, { target: { value: '401212345678' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 3011123456, validity false', () => {
    fireEvent.change(input, { target: { value: '3011123456' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 3012ABCD5678, validity false', () => {
    fireEvent.change(input, { target: { value: '3012ABCD5678' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 301112345$678, validity false', () => {
    fireEvent.change(input, { target: { value: '301112345$678' } });
    expect(input.validity.valid).toBe(false);
  });
});
