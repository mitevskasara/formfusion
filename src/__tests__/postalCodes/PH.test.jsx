import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with PH postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.ph} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.ph);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0860, validity false', () => {
    fireEvent.change(input, { target: { value: '08607128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0860, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 0860' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0860, validity true', () => {
    fireEvent.change(input, { target: { value: '0860' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 0870, validity false', () => {
    fireEvent.change(input, { target: { value: '08704128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0870, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 0870' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0870, validity true', () => {
    fireEvent.change(input, { target: { value: '0870' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 0880, validity false', () => {
    fireEvent.change(input, { target: { value: '08806128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0880, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 0880' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0880, validity true', () => {
    fireEvent.change(input, { target: { value: '0880' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1057, validity false', () => {
    fireEvent.change(input, { target: { value: '10574128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1057, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1057' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1057, validity true', () => {
    fireEvent.change(input, { target: { value: '1057' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1062, validity false', () => {
    fireEvent.change(input, { target: { value: '10624128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1062, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1062' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1062, validity true', () => {
    fireEvent.change(input, { target: { value: '1062' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1064, validity false', () => {
    fireEvent.change(input, { target: { value: '10641128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1064, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1064' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1064, validity true', () => {
    fireEvent.change(input, { target: { value: '1064' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1069, validity false', () => {
    fireEvent.change(input, { target: { value: '10690128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1069, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1069' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1069, validity true', () => {
    fireEvent.change(input, { target: { value: '1069' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1079, validity false', () => {
    fireEvent.change(input, { target: { value: '10792128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1079, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1079' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1079, validity true', () => {
    fireEvent.change(input, { target: { value: '1079' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1104, validity false', () => {
    fireEvent.change(input, { target: { value: '11041128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1104, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1104' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1104, validity true', () => {
    fireEvent.change(input, { target: { value: '1104' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1105, validity false', () => {
    fireEvent.change(input, { target: { value: '11057128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1105, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1105' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1105, validity true', () => {
    fireEvent.change(input, { target: { value: '1105' } });
    expect(input.validity.valid).toBe(true);
  });
});
