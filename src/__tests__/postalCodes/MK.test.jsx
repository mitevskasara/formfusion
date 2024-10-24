import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with MK postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-mk" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.MK);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1332, validity false', () => {
    fireEvent.change(input, { target: { value: '13324128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1332, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1332' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1332, validity true', () => {
    fireEvent.change(input, { target: { value: '1332' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1488, validity false', () => {
    fireEvent.change(input, { target: { value: '14886128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1488, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1488' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1488, validity true', () => {
    fireEvent.change(input, { target: { value: '1488' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2307, validity false', () => {
    fireEvent.change(input, { target: { value: '23070128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2307, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2307' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2307, validity true', () => {
    fireEvent.change(input, { target: { value: '2307' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2412, validity false', () => {
    fireEvent.change(input, { target: { value: '24125128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2412, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2412' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2412, validity true', () => {
    fireEvent.change(input, { target: { value: '2412' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2434, validity false', () => {
    fireEvent.change(input, { target: { value: '24342128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2434, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2434' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2434, validity true', () => {
    fireEvent.change(input, { target: { value: '2434' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 7202, validity false', () => {
    fireEvent.change(input, { target: { value: '72025128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 7202, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 7202' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 7202, validity true', () => {
    fireEvent.change(input, { target: { value: '7202' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1238, validity false', () => {
    fireEvent.change(input, { target: { value: '12388128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1238, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1238' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1238, validity true', () => {
    fireEvent.change(input, { target: { value: '1238' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 6530, validity false', () => {
    fireEvent.change(input, { target: { value: '65300128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 6530, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 6530' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 6530, validity true', () => {
    fireEvent.change(input, { target: { value: '6530' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 7310, validity false', () => {
    fireEvent.change(input, { target: { value: '73104128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 7310, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 7310' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 7310, validity true', () => {
    fireEvent.change(input, { target: { value: '7310' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 7319, validity false', () => {
    fireEvent.change(input, { target: { value: '73190128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 7319, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 7319' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 7319, validity true', () => {
    fireEvent.change(input, { target: { value: '7319' } });
    expect(input.validity.valid).toBe(true);
  });
});
