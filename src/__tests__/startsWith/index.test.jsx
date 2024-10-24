import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/patterns';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input pattern startsWith', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="startsWith"
          name="startsWith"
          pattern={patterns.startsWith('abc')}
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns.startsWith('abc'))).toBe(true);
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(patterns.startsWith('abc'));
  });

  test('Testing value: abcgdgdg, validity true', () => {
    fireEvent.change(input, {
      target: { value: 'abcgdgdg' },
    });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: abc tyyd, validity true', () => {
    fireEvent.change(input, {
      target: { value: 'abc tyyd' },
    });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: abc123, validity true', () => {
    fireEvent.change(input, {
      target: { value: 'abc123' },
    });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: cgdjd, validity false', () => {
    fireEvent.change(input, {
      target: { value: 'cgdjd' },
    });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: saraabcsd, validity false', () => {
    fireEvent.change(input, {
      target: { value: 'saraabcsd' },
    });
    expect(input.validity.valid).toBe(false);
  });
});
