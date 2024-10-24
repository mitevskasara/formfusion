import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/types';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input type username', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="username" name="username" type="username" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns.username)).toBe(true);
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(patterns.username);
  });

  test('Testing value: abc123, validity true', () => {
    fireEvent.change(input, { target: { value: 'abc123' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: User@example, validity true', () => {
    fireEvent.change(input, { target: { value: 'User@example' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: alpha-beta, validity true', () => {
    fireEvent.change(input, { target: { value: 'alpha-beta' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: name_user, validity true', () => {
    fireEvent.change(input, { target: { value: 'name_user' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: user123@example.com, validity false', () => {
    fireEvent.change(input, { target: { value: 'user123@example.com' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: spaces are invalid, validity false', () => {
    fireEvent.change(input, { target: { value: 'spaces are invalid' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: !@#$%^&*, validity false', () => {
    fireEvent.change(input, { target: { value: '!@#$%^&*' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: underscore_@, validity true', () => {
    fireEvent.change(input, { target: { value: 'underscore_@' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: invalid!email, validity false', () => {
    fireEvent.change(input, { target: { value: 'invalid!email' } });
    expect(input.validity.valid).toBe(false);
  });
});
