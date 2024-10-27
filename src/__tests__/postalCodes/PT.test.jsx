import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with PT postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.pt} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.pt);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-035, validity false', () => {
    fireEvent.change(input, { target: { value: '3750-0358128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-035, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3750-035' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-035, validity true', () => {
    fireEvent.change(input, { target: { value: '3750-035' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3750-054, validity false', () => {
    fireEvent.change(input, { target: { value: '3750-0546128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-054, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3750-054' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-054, validity true', () => {
    fireEvent.change(input, { target: { value: '3750-054' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3750-138, validity false', () => {
    fireEvent.change(input, { target: { value: '3750-1387128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-138, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3750-138' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-138, validity true', () => {
    fireEvent.change(input, { target: { value: '3750-138' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3750-325, validity false', () => {
    fireEvent.change(input, { target: { value: '3750-3257128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-325, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3750-325' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-325, validity true', () => {
    fireEvent.change(input, { target: { value: '3750-325' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3750-420, validity false', () => {
    fireEvent.change(input, { target: { value: '3750-4201128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-420, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3750-420' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-420, validity true', () => {
    fireEvent.change(input, { target: { value: '3750-420' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3750-430, validity false', () => {
    fireEvent.change(input, { target: { value: '3750-4304128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-430, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3750-430' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-430, validity true', () => {
    fireEvent.change(input, { target: { value: '3750-430' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3750-443, validity false', () => {
    fireEvent.change(input, { target: { value: '3750-4434128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-443, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3750-443' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-443, validity true', () => {
    fireEvent.change(input, { target: { value: '3750-443' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3750-447, validity false', () => {
    fireEvent.change(input, { target: { value: '3750-4478128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-447, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3750-447' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-447, validity true', () => {
    fireEvent.change(input, { target: { value: '3750-447' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3750-455, validity false', () => {
    fireEvent.change(input, { target: { value: '3750-4557128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-455, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3750-455' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-455, validity true', () => {
    fireEvent.change(input, { target: { value: '3750-455' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3750-461, validity false', () => {
    fireEvent.change(input, { target: { value: '3750-4618128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-461, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3750-461' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3750-461, validity true', () => {
    fireEvent.change(input, { target: { value: '3750-461' } });
    expect(input.validity.valid).toBe(true);
  });
});
