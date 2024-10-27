import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with CA postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.ca} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.ca);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T1Y, validity false', () => {
    fireEvent.change(input, { target: { value: 'T1Y4128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T1Y, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ T1Y' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T1Y, validity true', () => {
    fireEvent.change(input, { target: { value: 'T1Y' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: T1Z, validity false', () => {
    fireEvent.change(input, { target: { value: 'T1Z2128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T1Z, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ T1Z' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T1Z, validity true', () => {
    fireEvent.change(input, { target: { value: 'T1Z' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: T5T, validity false', () => {
    fireEvent.change(input, { target: { value: 'T5T6128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T5T, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ T5T' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T5T, validity true', () => {
    fireEvent.change(input, { target: { value: 'T5T' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: T7E, validity false', () => {
    fireEvent.change(input, { target: { value: 'T7E2128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T7E, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ T7E' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T7E, validity true', () => {
    fireEvent.change(input, { target: { value: 'T7E' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: T7Y, validity false', () => {
    fireEvent.change(input, { target: { value: 'T7Y0128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T7Y, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ T7Y' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: T7Y, validity true', () => {
    fireEvent.change(input, { target: { value: 'T7Y' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: V5T, validity false', () => {
    fireEvent.change(input, { target: { value: 'V5T6128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V5T, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ V5T' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V5T, validity true', () => {
    fireEvent.change(input, { target: { value: 'V5T' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: V6K, validity false', () => {
    fireEvent.change(input, { target: { value: 'V6K0128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V6K, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ V6K' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V6K, validity true', () => {
    fireEvent.change(input, { target: { value: 'V6K' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: V0W, validity false', () => {
    fireEvent.change(input, { target: { value: 'V0W3128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V0W, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ V0W' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V0W, validity true', () => {
    fireEvent.change(input, { target: { value: 'V0W' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: V2M, validity false', () => {
    fireEvent.change(input, { target: { value: 'V2M6128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V2M, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ V2M' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V2M, validity true', () => {
    fireEvent.change(input, { target: { value: 'V2M' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: V5A, validity false', () => {
    fireEvent.change(input, { target: { value: 'V5A3128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V5A, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ V5A' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V5A, validity true', () => {
    fireEvent.change(input, { target: { value: 'V5A' } });
    expect(input.validity.valid).toBe(true);
  });
});
