import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with LT postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.lt} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.lt);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 66001, validity false', () => {
    fireEvent.change(input, { target: { value: '660011128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 66001, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 66001' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 66001, validity true', () => {
    fireEvent.change(input, { target: { value: '66001' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 67027, validity false', () => {
    fireEvent.change(input, { target: { value: '670271128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 67027, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 67027' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 67027, validity true', () => {
    fireEvent.change(input, { target: { value: '67027' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 62001, validity false', () => {
    fireEvent.change(input, { target: { value: '620013128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 62001, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 62001' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 62001, validity true', () => {
    fireEvent.change(input, { target: { value: '62001' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 62014, validity false', () => {
    fireEvent.change(input, { target: { value: '620147128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 62014, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 62014' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 62014, validity true', () => {
    fireEvent.change(input, { target: { value: '62014' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 64001, validity false', () => {
    fireEvent.change(input, { target: { value: '640011128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64001, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 64001' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64001, validity true', () => {
    fireEvent.change(input, { target: { value: '64001' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 64009, validity false', () => {
    fireEvent.change(input, { target: { value: '640093128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64009, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 64009' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64009, validity true', () => {
    fireEvent.change(input, { target: { value: '64009' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 64021, validity false', () => {
    fireEvent.change(input, { target: { value: '640211128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64021, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 64021' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64021, validity true', () => {
    fireEvent.change(input, { target: { value: '64021' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 64025, validity false', () => {
    fireEvent.change(input, { target: { value: '640251128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64025, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 64025' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64025, validity true', () => {
    fireEvent.change(input, { target: { value: '64025' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 64037, validity false', () => {
    fireEvent.change(input, { target: { value: '640378128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64037, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 64037' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64037, validity true', () => {
    fireEvent.change(input, { target: { value: '64037' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 64045, validity false', () => {
    fireEvent.change(input, { target: { value: '640458128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64045, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 64045' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 64045, validity true', () => {
    fireEvent.change(input, { target: { value: '64045' } });
    expect(input.validity.valid).toBe(true);
  });
});
