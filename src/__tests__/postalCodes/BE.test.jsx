import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with BE postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-be" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.BE);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2060, validity false', () => {
    fireEvent.change(input, { target: { value: '20605128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2060, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2060' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2060, validity true', () => {
    fireEvent.change(input, { target: { value: '2060' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2180, validity false', () => {
    fireEvent.change(input, { target: { value: '21801128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2180, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2180' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2180, validity true', () => {
    fireEvent.change(input, { target: { value: '2180' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2200, validity false', () => {
    fireEvent.change(input, { target: { value: '22005128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2200, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2200' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2200, validity true', () => {
    fireEvent.change(input, { target: { value: '2200' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2240, validity false', () => {
    fireEvent.change(input, { target: { value: '22400128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2240, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2240' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2240, validity true', () => {
    fireEvent.change(input, { target: { value: '2240' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2270, validity false', () => {
    fireEvent.change(input, { target: { value: '22705128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2270, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2270' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2270, validity true', () => {
    fireEvent.change(input, { target: { value: '2270' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2350, validity false', () => {
    fireEvent.change(input, { target: { value: '23506128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2350, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2350' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2350, validity true', () => {
    fireEvent.change(input, { target: { value: '2350' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2390, validity false', () => {
    fireEvent.change(input, { target: { value: '23901128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2390, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2390' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2390, validity true', () => {
    fireEvent.change(input, { target: { value: '2390' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2640, validity false', () => {
    fireEvent.change(input, { target: { value: '26403128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2640, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2640' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2640, validity true', () => {
    fireEvent.change(input, { target: { value: '2640' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2840, validity false', () => {
    fireEvent.change(input, { target: { value: '28406128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2840, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2840' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2840, validity true', () => {
    fireEvent.change(input, { target: { value: '2840' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2880, validity false', () => {
    fireEvent.change(input, { target: { value: '28805128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2880, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2880' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2880, validity true', () => {
    fireEvent.change(input, { target: { value: '2880' } });
    expect(input.validity.valid).toBe(true);
  });
});
