import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with RO postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.ro} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.ro);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 237385, validity false', () => {
    fireEvent.change(input, { target: { value: '2373855128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 237385, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 237385' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 237385, validity true', () => {
    fireEvent.change(input, { target: { value: '237385' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 237531, validity false', () => {
    fireEvent.change(input, { target: { value: '2375313128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 237531, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 237531' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 237531, validity true', () => {
    fireEvent.change(input, { target: { value: '237531' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 237566, validity false', () => {
    fireEvent.change(input, { target: { value: '2375660128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 237566, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 237566' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 237566, validity true', () => {
    fireEvent.change(input, { target: { value: '237566' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 100008, validity false', () => {
    fireEvent.change(input, { target: { value: '1000080128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100008, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 100008' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100008, validity true', () => {
    fireEvent.change(input, { target: { value: '100008' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 100032, validity false', () => {
    fireEvent.change(input, { target: { value: '1000326128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100032, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 100032' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100032, validity true', () => {
    fireEvent.change(input, { target: { value: '100032' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 100039, validity false', () => {
    fireEvent.change(input, { target: { value: '1000392128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100039, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 100039' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100039, validity true', () => {
    fireEvent.change(input, { target: { value: '100039' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 100059, validity false', () => {
    fireEvent.change(input, { target: { value: '1000590128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100059, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 100059' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100059, validity true', () => {
    fireEvent.change(input, { target: { value: '100059' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 100092, validity false', () => {
    fireEvent.change(input, { target: { value: '1000927128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100092, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 100092' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100092, validity true', () => {
    fireEvent.change(input, { target: { value: '100092' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 100171, validity false', () => {
    fireEvent.change(input, { target: { value: '1001714128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100171, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 100171' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100171, validity true', () => {
    fireEvent.change(input, { target: { value: '100171' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 100201, validity false', () => {
    fireEvent.change(input, { target: { value: '1002013128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100201, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 100201' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 100201, validity true', () => {
    fireEvent.change(input, { target: { value: '100201' } });
    expect(input.validity.valid).toBe(true);
  });
});
