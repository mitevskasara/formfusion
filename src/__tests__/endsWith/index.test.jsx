import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/patterns';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input pattern endsWith', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="endsWith"
          name="endsWith"
          pattern={patterns.endsWith('abc')}
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns.endsWith('abc'))).toBe(true);
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(patterns.endsWith('abc'));
  });

  test('Testing value: testabc, validity true', () => {
    fireEvent.change(input, {
      target: { value: 'testabc' },
    });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: testing abc, validity true', () => {
    fireEvent.change(input, {
      target: { value: 'testing abc' },
    });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: 123abc, validity true', () => {
    fireEvent.change(input, {
      target: { value: '123abc' },
    });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: testing abcv, validity false', () => {
    fireEvent.change(input, {
      target: { value: 'testing abcv' },
    });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: test, validity false', () => {
    fireEvent.change(input, {
      target: { value: 'test' },
    });
    expect(input.validity.valid).toBe(false);
  });
});
