import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with VI postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-vi" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.VI);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00805, validity false', () => {
    fireEvent.change(input, { target: { value: '008057128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00805, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 00805' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00805, validity true', () => {
    fireEvent.change(input, { target: { value: '00805' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 00831, validity false', () => {
    fireEvent.change(input, { target: { value: '008311128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00831, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 00831' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00831, validity true', () => {
    fireEvent.change(input, { target: { value: '00831' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 00830, validity false', () => {
    fireEvent.change(input, { target: { value: '008303128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00830, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 00830' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00830, validity true', () => {
    fireEvent.change(input, { target: { value: '00830' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 00841, validity false', () => {
    fireEvent.change(input, { target: { value: '008415128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00841, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 00841' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00841, validity true', () => {
    fireEvent.change(input, { target: { value: '00841' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 00822, validity false', () => {
    fireEvent.change(input, { target: { value: '008223128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00822, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 00822' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00822, validity true', () => {
    fireEvent.change(input, { target: { value: '00822' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 00802, validity false', () => {
    fireEvent.change(input, { target: { value: '008021128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00802, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 00802' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00802, validity true', () => {
    fireEvent.change(input, { target: { value: '00802' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 00824, validity false', () => {
    fireEvent.change(input, { target: { value: '008244128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00824, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 00824' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00824, validity true', () => {
    fireEvent.change(input, { target: { value: '00824' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 00850, validity false', () => {
    fireEvent.change(input, { target: { value: '008503128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00850, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 00850' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00850, validity true', () => {
    fireEvent.change(input, { target: { value: '00850' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 00851, validity false', () => {
    fireEvent.change(input, { target: { value: '008510128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00851, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 00851' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00851, validity true', () => {
    fireEvent.change(input, { target: { value: '00851' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 00840, validity false', () => {
    fireEvent.change(input, { target: { value: '008402128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00840, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 00840' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 00840, validity true', () => {
    fireEvent.change(input, { target: { value: '00840' } });
    expect(input.validity.valid).toBe(true);
  });
});
