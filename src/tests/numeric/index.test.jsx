import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from "../../constants/patterns";
import isRegexPatternValid from "../utils/regexValidation";

describe('Testing validity of input type numeric', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => { }}>
        <Input
          id="numeric"
          name="numeric"
          type="numeric"
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns.numeric)).toBe(true)
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute("pattern")).toBe(patterns.numeric)
  });

  test('Testing value: 1223232, validity true', () => {
    fireEvent.change(input, { target: { value: '1223232' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 3233, validity true', () => {
    fireEvent.change(input, { target: { value: '3233' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 1, validity true', () => {
    fireEvent.change(input, { target: { value: '1' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 123, validity true', () => {
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 12345545454, validity true', () => {
    fireEvent.change(input, { target: { value: '12345545454' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 13vffd, validity false', () => {
    fireEvent.change(input, { target: { value: '13vffd' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 12 8344, validity false', () => {
    fireEvent.change(input, { target: { value: '12 8344' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 122 !, validity false', () => {
    fireEvent.change(input, { target: { value: '122 !' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: ABCDE, validity false', () => {
    fireEvent.change(input, { target: { value: 'ABCDE' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: !@#$, validity false', () => {
    fireEvent.change(input, { target: { value: '!@#$' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value:   773d, validity false', () => {
    fireEvent.change(input, { target: { value: '  773d' } });
    expect(input.validity.valid).toBe(false);
  });

});