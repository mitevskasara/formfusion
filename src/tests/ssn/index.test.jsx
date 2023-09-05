import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from "../../constants/patterns";
import isRegexPatternValid from "../utils/regexValidation";

describe('Testing validity of input type ssn', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => { }}>
        <Input
          id="ssn"
          name="ssn"
          type="ssn"
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns['ssn'])).toBe(true)
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute("pattern")).toBe(patterns['ssn'])
  });

  test('Testing value: 123-45-6789, validity true', () => {
    fireEvent.change(input, { target: { value: '123-45-6789' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 987-65-4321, validity true', () => {
    fireEvent.change(input, { target: { value: '987-65-4321' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 111-11-1111, validity true', () => {
    fireEvent.change(input, { target: { value: '111-11-1111' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 999-99-9999, validity true', () => {
    fireEvent.change(input, { target: { value: '999-99-9999' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 222-22-2222, validity true', () => {
    fireEvent.change(input, { target: { value: '222-22-2222' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 333-33-3333, validity true', () => {
    fireEvent.change(input, { target: { value: '333-33-3333' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 444-44-4444, validity true', () => {
    fireEvent.change(input, { target: { value: '444-44-4444' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 555-55-5555, validity true', () => {
    fireEvent.change(input, { target: { value: '555-55-5555' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 666-66-6666, validity true', () => {
    fireEvent.change(input, { target: { value: '666-66-6666' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 777-77-7777, validity true', () => {
    fireEvent.change(input, { target: { value: '777-77-7777' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 123-45-67890, validity false', () => {
    fireEvent.change(input, { target: { value: '123-45-67890' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 987-65-43210, validity false', () => {
    fireEvent.change(input, { target: { value: '987-65-43210' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 123456789, validity false', () => {
    fireEvent.change(input, { target: { value: '123456789' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 987654321, validity false', () => {
    fireEvent.change(input, { target: { value: '987654321' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 111-11-111, validity false', () => {
    fireEvent.change(input, { target: { value: '111-11-111' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 999-99-999, validity false', () => {
    fireEvent.change(input, { target: { value: '999-99-999' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 1234-567-890, validity false', () => {
    fireEvent.change(input, { target: { value: '1234-567-890' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: abc-de-fghi, validity false', () => {
    fireEvent.change(input, { target: { value: 'abc-de-fghi' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: 1234-56-789, validity false', () => {
    fireEvent.change(input, { target: { value: '1234-56-789' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: abc-12-xyz, validity false', () => {
    fireEvent.change(input, { target: { value: 'abc-12-xyz' } });
    expect(input.validity.valid).toBe(false);
  });

});