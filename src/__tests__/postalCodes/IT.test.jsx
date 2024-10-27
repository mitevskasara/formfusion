import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with IT postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.it} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.it);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33080, validity false', () => {
    fireEvent.change(input, { target: { value: '330808128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33080, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 33080' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33080, validity true', () => {
    fireEvent.change(input, { target: { value: '33080' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 33081, validity false', () => {
    fireEvent.change(input, { target: { value: '330810128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33081, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 33081' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33081, validity true', () => {
    fireEvent.change(input, { target: { value: '33081' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 33082, validity false', () => {
    fireEvent.change(input, { target: { value: '330826128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33082, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 33082' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33082, validity true', () => {
    fireEvent.change(input, { target: { value: '33082' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 33086, validity false', () => {
    fireEvent.change(input, { target: { value: '330860128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33086, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 33086' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33086, validity true', () => {
    fireEvent.change(input, { target: { value: '33086' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 33090, validity false', () => {
    fireEvent.change(input, { target: { value: '330901128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33090, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 33090' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33090, validity true', () => {
    fireEvent.change(input, { target: { value: '33090' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 33097, validity false', () => {
    fireEvent.change(input, { target: { value: '330972128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33097, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 33097' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33097, validity true', () => {
    fireEvent.change(input, { target: { value: '33097' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 34015, validity false', () => {
    fireEvent.change(input, { target: { value: '340157128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 34015, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 34015' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 34015, validity true', () => {
    fireEvent.change(input, { target: { value: '34015' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 33028, validity false', () => {
    fireEvent.change(input, { target: { value: '330283128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33028, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 33028' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33028, validity true', () => {
    fireEvent.change(input, { target: { value: '33028' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 33030, validity false', () => {
    fireEvent.change(input, { target: { value: '330308128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33030, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 33030' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33030, validity true', () => {
    fireEvent.change(input, { target: { value: '33030' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 33032, validity false', () => {
    fireEvent.change(input, { target: { value: '330326128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33032, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 33032' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33032, validity true', () => {
    fireEvent.change(input, { target: { value: '33032' } });
    expect(input.validity.valid).toBe(true);
  });
});
