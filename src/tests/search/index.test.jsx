import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from "../../constants/patterns";
import isRegexPatternValid from "../utils/regexValidation";

describe('Testing validity of input type search', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => { }}>
        <Input
          id="search"
          name="search"
          type="search"
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns.search)).toBe(true)
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute("pattern")).toBe(patterns.search)
  });

  test('Testing value: alpha123, validity true', () => {
    fireEvent.change(input, { target: { value: 'alpha123' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: Hello World, validity true', () => {
    fireEvent.change(input, { target: { value: 'Hello World' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 42, validity true', () => {
    fireEvent.change(input, { target: { value: '42' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: Test String 123, validity true', () => {
    fireEvent.change(input, { target: { value: 'Test String 123' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: Spaces and Digits 987, validity true', () => {
    fireEvent.change(input, { target: { value: 'Spaces and Digits 987' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: special@chars, validity false', () => {
    fireEvent.change(input, { target: { value: 'special@chars' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: under_score, validity false', () => {
    fireEvent.change(input, { target: { value: 'under_score' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: line-break\n, validity false', () => {
    fireEvent.change(input, { target: { value: 'line-break\n' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: !@#$%^&*, validity false', () => {
    fireEvent.change(input, { target: { value: '!@#$%^&*' } });
    expect(input.validity.valid).toBe(false);
  });
});