import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with HT postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.ht} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.ht);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT3130, validity false', () => {
    fireEvent.change(input, { target: { value: 'HT31308128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT3130, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HT3130' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT3130, validity true', () => {
    fireEvent.change(input, { target: { value: 'HT3130' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HT4323, validity false', () => {
    fireEvent.change(input, { target: { value: 'HT43236128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT4323, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HT4323' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT4323, validity true', () => {
    fireEvent.change(input, { target: { value: 'HT4323' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HT6331, validity false', () => {
    fireEvent.change(input, { target: { value: 'HT63311128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT6331, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HT6331' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT6331, validity true', () => {
    fireEvent.change(input, { target: { value: 'HT6331' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HT4120, validity false', () => {
    fireEvent.change(input, { target: { value: 'HT41203128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT4120, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HT4120' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT4120, validity true', () => {
    fireEvent.change(input, { target: { value: 'HT4120' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HT6142, validity false', () => {
    fireEvent.change(input, { target: { value: 'HT61428128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT6142, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HT6142' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT6142, validity true', () => {
    fireEvent.change(input, { target: { value: 'HT6142' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HT6220, validity false', () => {
    fireEvent.change(input, { target: { value: 'HT62206128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT6220, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HT6220' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT6220, validity true', () => {
    fireEvent.change(input, { target: { value: 'HT6220' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HT6421, validity false', () => {
    fireEvent.change(input, { target: { value: 'HT64212128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT6421, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HT6421' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT6421, validity true', () => {
    fireEvent.change(input, { target: { value: 'HT6421' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HT8150, validity false', () => {
    fireEvent.change(input, { target: { value: 'HT81503128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT8150, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HT8150' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT8150, validity true', () => {
    fireEvent.change(input, { target: { value: 'HT8150' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HT7340, validity false', () => {
    fireEvent.change(input, { target: { value: 'HT73405128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT7340, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HT7340' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT7340, validity true', () => {
    fireEvent.change(input, { target: { value: 'HT7340' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: HT7413, validity false', () => {
    fireEvent.change(input, { target: { value: 'HT74136128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT7413, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ HT7413' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: HT7413, validity true', () => {
    fireEvent.change(input, { target: { value: 'HT7413' } });
    expect(input.validity.valid).toBe(true);
  });
});
