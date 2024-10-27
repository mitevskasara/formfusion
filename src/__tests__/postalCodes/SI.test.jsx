import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with SI postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.si} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.si);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1241, validity false', () => {
    fireEvent.change(input, { target: { value: '12410128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1241, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1241' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1241, validity true', () => {
    fireEvent.change(input, { target: { value: '1241' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1504, validity false', () => {
    fireEvent.change(input, { target: { value: '15045128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1504, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1504' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1504, validity true', () => {
    fireEvent.change(input, { target: { value: '1504' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2284, validity false', () => {
    fireEvent.change(input, { target: { value: '22848128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2284, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2284' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2284, validity true', () => {
    fireEvent.change(input, { target: { value: '2284' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2288, validity false', () => {
    fireEvent.change(input, { target: { value: '22881128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2288, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2288' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2288, validity true', () => {
    fireEvent.change(input, { target: { value: '2288' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2365, validity false', () => {
    fireEvent.change(input, { target: { value: '23652128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2365, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2365' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2365, validity true', () => {
    fireEvent.change(input, { target: { value: '2365' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2382, validity false', () => {
    fireEvent.change(input, { target: { value: '23825128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2382, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2382' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2382, validity true', () => {
    fireEvent.change(input, { target: { value: '2382' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2392, validity false', () => {
    fireEvent.change(input, { target: { value: '23925128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2392, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2392' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2392, validity true', () => {
    fireEvent.change(input, { target: { value: '2392' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2500, validity false', () => {
    fireEvent.change(input, { target: { value: '25001128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2500, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2500' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2500, validity true', () => {
    fireEvent.change(input, { target: { value: '2500' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3262, validity false', () => {
    fireEvent.change(input, { target: { value: '32624128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3262, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3262' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3262, validity true', () => {
    fireEvent.change(input, { target: { value: '3262' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 4210, validity false', () => {
    fireEvent.change(input, { target: { value: '42101128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4210, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 4210' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4210, validity true', () => {
    fireEvent.change(input, { target: { value: '4210' } });
    expect(input.validity.valid).toBe(true);
  });
});
