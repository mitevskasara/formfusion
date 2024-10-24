import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with CL postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-cl" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.CL);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2820000, validity false', () => {
    fireEvent.change(input, { target: { value: '28200006128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2820000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2820000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2820000, validity true', () => {
    fireEvent.change(input, { target: { value: '2820000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2900000, validity false', () => {
    fireEvent.change(input, { target: { value: '29000006128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2900000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2900000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2900000, validity true', () => {
    fireEvent.change(input, { target: { value: '2900000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3530000, validity false', () => {
    fireEvent.change(input, { target: { value: '35300003128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3530000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3530000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3530000, validity true', () => {
    fireEvent.change(input, { target: { value: '3530000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9650000, validity false', () => {
    fireEvent.change(input, { target: { value: '96500005128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9650000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9650000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9650000, validity true', () => {
    fireEvent.change(input, { target: { value: '9650000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2140000, validity false', () => {
    fireEvent.change(input, { target: { value: '21400001128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2140000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2140000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2140000, validity true', () => {
    fireEvent.change(input, { target: { value: '2140000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 4680000, validity false', () => {
    fireEvent.change(input, { target: { value: '46800001128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4680000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 4680000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4680000, validity true', () => {
    fireEvent.change(input, { target: { value: '4680000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 4370000, validity false', () => {
    fireEvent.change(input, { target: { value: '43700006128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4370000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 4370000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4370000, validity true', () => {
    fireEvent.change(input, { target: { value: '4370000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1740000, validity false', () => {
    fireEvent.change(input, { target: { value: '17400006128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1740000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1740000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1740000, validity true', () => {
    fireEvent.change(input, { target: { value: '1740000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1880000, validity false', () => {
    fireEvent.change(input, { target: { value: '18800001128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1880000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1880000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1880000, validity true', () => {
    fireEvent.change(input, { target: { value: '1880000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3140000, validity false', () => {
    fireEvent.change(input, { target: { value: '31400005128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3140000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3140000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3140000, validity true', () => {
    fireEvent.change(input, { target: { value: '3140000' } });
    expect(input.validity.valid).toBe(true);
  });
});
