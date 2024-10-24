import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import patterns from '../../constants/types';
import isRegexPatternValid from '../utils/regexValidation';

describe('Testing validity of input type alphabetic', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="alphabetic"
          name="alphabetic"
          type="alphabetic"
          required={true}
        />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Validating regex pattern', () => {
    expect(isRegexPatternValid(patterns.alphabetic)).toBe(true);
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(patterns.alphabetic);
  });

  test('Testing value: Asas, validity true', () => {
    fireEvent.change(input, { target: { value: 'Asas' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: ABC, validity true', () => {
    fireEvent.change(input, { target: { value: 'ABC' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: asbHss, validity true', () => {
    fireEvent.change(input, { target: { value: 'asbHss' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: abcvvc bvbc, validity true', () => {
    fireEvent.change(input, { target: { value: 'abcvvc bvbc' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: as sDs, validity true', () => {
    fireEvent.change(input, { target: { value: 'as sDs' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing value: abc abc, validity true', () => {
    fireEvent.change(input, { target: { value: 'abc abc' } });
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

  test('Testing value: Assc !@, validity false', () => {
    fireEvent.change(input, { target: { value: 'Assc !@' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: ABCDE12, validity false', () => {
    fireEvent.change(input, { target: { value: 'ABCDE12' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: !@#$, validity false', () => {
    fireEvent.change(input, { target: { value: '!@#$' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing value: ab-bcb-s ds, validity false', () => {
    fireEvent.change(input, { target: { value: 'ab-bcb-s ds' } });
    expect(input.validity.valid).toBe(false);
  });
});
