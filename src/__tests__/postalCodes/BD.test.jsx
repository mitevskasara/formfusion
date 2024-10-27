import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with BD postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.bd} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.bd);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1223, validity false', () => {
    fireEvent.change(input, { target: { value: '12233128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1223, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1223' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1223, validity true', () => {
    fireEvent.change(input, { target: { value: '1223' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1362, validity false', () => {
    fireEvent.change(input, { target: { value: '13624128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1362, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1362' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1362, validity true', () => {
    fireEvent.change(input, { target: { value: '1362' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 7810, validity false', () => {
    fireEvent.change(input, { target: { value: '78100128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 7810, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 7810' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 7810, validity true', () => {
    fireEvent.change(input, { target: { value: '7810' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2301, validity false', () => {
    fireEvent.change(input, { target: { value: '23016128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2301, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2301' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2301, validity true', () => {
    fireEvent.change(input, { target: { value: '2301' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1527, validity false', () => {
    fireEvent.change(input, { target: { value: '15272128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1527, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1527' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1527, validity true', () => {
    fireEvent.change(input, { target: { value: '1527' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 8000, validity false', () => {
    fireEvent.change(input, { target: { value: '80006128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 8000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8000, validity true', () => {
    fireEvent.change(input, { target: { value: '8000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1938, validity false', () => {
    fireEvent.change(input, { target: { value: '19381128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1938, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1938' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1938, validity true', () => {
    fireEvent.change(input, { target: { value: '1938' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9320, validity false', () => {
    fireEvent.change(input, { target: { value: '93201128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9320, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9320' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9320, validity true', () => {
    fireEvent.change(input, { target: { value: '9320' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9371, validity false', () => {
    fireEvent.change(input, { target: { value: '93718128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9371, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9371' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9371, validity true', () => {
    fireEvent.change(input, { target: { value: '9371' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 7471, validity false', () => {
    fireEvent.change(input, { target: { value: '74716128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 7471, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 7471' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 7471, validity true', () => {
    fireEvent.change(input, { target: { value: '7471' } });
    expect(input.validity.valid).toBe(true);
  });
});
