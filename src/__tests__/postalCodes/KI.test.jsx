import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with KI postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-ki" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.KI);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0101, validity false', () => {
    fireEvent.change(input, { target: { value: 'KI01012128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0101, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ KI0101' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0101, validity true', () => {
    fireEvent.change(input, { target: { value: 'KI0101' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: KI0102, validity false', () => {
    fireEvent.change(input, { target: { value: 'KI01028128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0102, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ KI0102' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0102, validity true', () => {
    fireEvent.change(input, { target: { value: 'KI0102' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: KI0103, validity false', () => {
    fireEvent.change(input, { target: { value: 'KI01030128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0103, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ KI0103' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0103, validity true', () => {
    fireEvent.change(input, { target: { value: 'KI0103' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: KI0104, validity false', () => {
    fireEvent.change(input, { target: { value: 'KI01041128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0104, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ KI0104' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0104, validity true', () => {
    fireEvent.change(input, { target: { value: 'KI0104' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: KI0105, validity false', () => {
    fireEvent.change(input, { target: { value: 'KI01051128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0105, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ KI0105' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0105, validity true', () => {
    fireEvent.change(input, { target: { value: 'KI0105' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: KI0106, validity false', () => {
    fireEvent.change(input, { target: { value: 'KI01067128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0106, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ KI0106' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0106, validity true', () => {
    fireEvent.change(input, { target: { value: 'KI0106' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: KI0107, validity false', () => {
    fireEvent.change(input, { target: { value: 'KI01070128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0107, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ KI0107' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0107, validity true', () => {
    fireEvent.change(input, { target: { value: 'KI0107' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: KI0108, validity false', () => {
    fireEvent.change(input, { target: { value: 'KI01084128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0108, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ KI0108' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0108, validity true', () => {
    fireEvent.change(input, { target: { value: 'KI0108' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: KI0109, validity false', () => {
    fireEvent.change(input, { target: { value: 'KI01097128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0109, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ KI0109' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0109, validity true', () => {
    fireEvent.change(input, { target: { value: 'KI0109' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: KI0110, validity false', () => {
    fireEvent.change(input, { target: { value: 'KI01102128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0110, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ KI0110' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: KI0110, validity true', () => {
    fireEvent.change(input, { target: { value: 'KI0110' } });
    expect(input.validity.valid).toBe(true);
  });
});
