import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';

describe('Testing combined patterns without an operator', () => {
  let input;
  let form;

  beforeEach(() => {
    render(
      <Form onSubmit={() => {}} validateOnChange>
        <Input id="plain" name="plain" type={{ patterns: ['^[a-z]+$'] }} />
      </Form>
    );
    input = screen.getByTestId('input');
    form = screen.getByTestId('form');
  });

  test('testing data-pattern attribute is set', () => {
    expect(input.getAttribute('data-pattern')).toBe('["^[a-z]+$"]');
  });

  test('testing value that matches the pattern is valid', () => {
    fireEvent.input(input, { target: { value: 'abc' } });
    fireEvent.submit(form);
    expect(input.validity.valid).toBe(true);
  });

  test('testing value that fails the pattern is invalid', () => {
    fireEvent.input(input, { target: { value: '123' } });
    fireEvent.blur(input);
    fireEvent.submit(form);
    expect(input.validity.valid).toBe(false);
  });
});
