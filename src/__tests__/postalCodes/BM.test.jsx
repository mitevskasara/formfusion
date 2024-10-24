import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with BM postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-bm" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.BM);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: DV 02, validity false', () => {
    fireEvent.change(input, { target: { value: 'DV 022128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: DV 02, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ DV 02' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: DV 02, validity true', () => {
    fireEvent.change(input, { target: { value: 'DV 02' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: MA 05, validity false', () => {
    fireEvent.change(input, { target: { value: 'MA 057128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: MA 05, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ MA 05' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: MA 05, validity true', () => {
    fireEvent.change(input, { target: { value: 'MA 05' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: PG 02, validity false', () => {
    fireEvent.change(input, { target: { value: 'PG 024128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: PG 02, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ PG 02' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: PG 02, validity true', () => {
    fireEvent.change(input, { target: { value: 'PG 02' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GE 03, validity false', () => {
    fireEvent.change(input, { target: { value: 'GE 038128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GE 03, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GE 03' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GE 03, validity true', () => {
    fireEvent.change(input, { target: { value: 'GE 03' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: WK 03, validity false', () => {
    fireEvent.change(input, { target: { value: 'WK 037128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: WK 03, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ WK 03' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: WK 03, validity true', () => {
    fireEvent.change(input, { target: { value: 'WK 03' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HM 14, validity false', () => {
    fireEvent.change(input, { target: { value: 'HM 142128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HM 14, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HM 14' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HM 14, validity true', () => {
    fireEvent.change(input, { target: { value: 'HM 14' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GE 01, validity false', () => {
    fireEvent.change(input, { target: { value: 'GE 018128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GE 01, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GE 01' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GE 01, validity true', () => {
    fireEvent.change(input, { target: { value: 'GE 01' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HM 16, validity false', () => {
    fireEvent.change(input, { target: { value: 'HM 162128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HM 16, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HM 16' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HM 16, validity true', () => {
    fireEvent.change(input, { target: { value: 'HM 16' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HM 19, validity false', () => {
    fireEvent.change(input, { target: { value: 'HM 193128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HM 19, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HM 19' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HM 19, validity true', () => {
    fireEvent.change(input, { target: { value: 'HM 19' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: WK 06, validity false', () => {
    fireEvent.change(input, { target: { value: 'WK 064128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: WK 06, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ WK 06' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: WK 06, validity true', () => {
    fireEvent.change(input, { target: { value: 'WK 06' } });
    expect(input.validity.valid).toBe(true);
  });
});
