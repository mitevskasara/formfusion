import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from "../../constants/patterns";
import isRegexPatternValid from "../utils/regexValidation";

describe('Testing validity of input type tel', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => { }}>
        <Input
          id="tel"
          name="tel"
          type="tel"
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns.tel)).toBe(true)
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute("pattern")).toBe(patterns.tel)
  });

  test('Testing value: +1 1234567890, validity true', () => {
    fireEvent.change(input, { target: { value: '+1 1234567890' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: +123 9876543210, validity true', () => {
    fireEvent.change(input, { target: { value: '+123 9876543210' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: +9999 5555555555, validity true', () => {
    fireEvent.change(input, { target: { value: '+9999 5555555555' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 1234567890, validity false', () => {
    fireEvent.change(input, { target: { value: '1234567890' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: +1 1234, validity false', () => {
    fireEvent.change(input, { target: { value: '+1 1234' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: +12 987654321, validity false', () => {
    fireEvent.change(input, { target: { value: '+12 987654321' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: +12345 55555555555, validity false', () => {
    fireEvent.change(input, { target: { value: '+12345 55555555555' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: +123 12abc34, validity false', () => {
    fireEvent.change(input, { target: { value: '+123 12abc34' } });
    expect(input.validity.valid).toBe(false);
  });

});