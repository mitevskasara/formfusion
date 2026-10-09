import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/patterns';
import { combine } from '../../utils/combine';

describe('Testing validity of combined patterns', () => {
  let input;
  let form;

  beforeEach(() => {
    render(
      <Form onSubmit={() => {}} validateOnChange>
        <Input
          id="combined"
          name="combined"
          type={combine.and(patterns.alphanumeric, patterns.minLetters(2))}
        />
      </Form>
    );
    input = screen.getByTestId('input');
    form = screen.getByTestId('form');
  });

  test('Testing valid data-patterns attribute', () => {
    const expectedPatterns = [patterns.alphanumeric, patterns.minLetters(2)];
    expect(input.getAttribute('data-pattern')).toBe(
      JSON.stringify(expectedPatterns)
    );
  });

  test('Testing valid input for alphanumeric pattern', () => {
    fireEvent.input(input, { target: { value: 'abc123' } });
    fireEvent.submit(form);
    expect(input.validity.valid).toBe(true);
  });

  test('Testing input that meets minLetters requirement', () => {
    fireEvent.input(input, { target: { value: 'ab123' } });
    fireEvent.blur(input);
    fireEvent.submit(form);
    expect(input.validity.valid).toBe(true);
  });

  test('Testing input that fails the alphanumeric pattern', () => {
    fireEvent.input(input, { target: { value: 'abc@123' } });
    fireEvent.blur(input);
    fireEvent.submit(form);
    expect(input.validity.valid).toBe(false);
  });

  test('Testing input that fails minLetters requirement', () => {
    fireEvent.input(input, { target: { value: '1a' } });
    fireEvent.submit(form);
    expect(input.validity.valid).toBe(false);
  });
});
