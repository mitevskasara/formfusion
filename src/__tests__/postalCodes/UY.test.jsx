import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with UY postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.uy} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.uy);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 55000, validity false', () => {
    fireEvent.change(input, { target: { value: '550006128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 55000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 55000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 55000, validity true', () => {
    fireEvent.change(input, { target: { value: '55000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 55100, validity false', () => {
    fireEvent.change(input, { target: { value: '551004128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 55100, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 55100' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 55100, validity true', () => {
    fireEvent.change(input, { target: { value: '55100' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 15700, validity false', () => {
    fireEvent.change(input, { target: { value: '157005128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 15700, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 15700' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 15700, validity true', () => {
    fireEvent.change(input, { target: { value: '15700' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 15900, validity false', () => {
    fireEvent.change(input, { target: { value: '159008128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 15900, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 15900' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 15900, validity true', () => {
    fireEvent.change(input, { target: { value: '15900' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 90100, validity false', () => {
    fireEvent.change(input, { target: { value: '901006128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 90100, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 90100' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 90100, validity true', () => {
    fireEvent.change(input, { target: { value: '90100' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 90200, validity false', () => {
    fireEvent.change(input, { target: { value: '902002128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 90200, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 90200' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 90200, validity true', () => {
    fireEvent.change(input, { target: { value: '90200' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 91100, validity false', () => {
    fireEvent.change(input, { target: { value: '911005128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 91100, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 91100' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 91100, validity true', () => {
    fireEvent.change(input, { target: { value: '91100' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 91200, validity false', () => {
    fireEvent.change(input, { target: { value: '912004128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 91200, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 91200' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 91200, validity true', () => {
    fireEvent.change(input, { target: { value: '91200' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 91500, validity false', () => {
    fireEvent.change(input, { target: { value: '915003128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 91500, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 91500' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 91500, validity true', () => {
    fireEvent.change(input, { target: { value: '91500' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 36200, validity false', () => {
    fireEvent.change(input, { target: { value: '362007128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 36200, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 36200' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 36200, validity true', () => {
    fireEvent.change(input, { target: { value: '36200' } });
    expect(input.validity.valid).toBe(true);
  });
});
