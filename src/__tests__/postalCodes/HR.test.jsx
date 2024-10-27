import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with HR postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.hr} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.hr);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10340, validity false', () => {
    fireEvent.change(input, { target: { value: '103403128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10340, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10340' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10340, validity true', () => {
    fireEvent.change(input, { target: { value: '10340' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10342, validity false', () => {
    fireEvent.change(input, { target: { value: '103422128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10342, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10342' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10342, validity true', () => {
    fireEvent.change(input, { target: { value: '10342' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10370, validity false', () => {
    fireEvent.change(input, { target: { value: '103701128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10370, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10370' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10370, validity true', () => {
    fireEvent.change(input, { target: { value: '10370' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10380, validity false', () => {
    fireEvent.change(input, { target: { value: '103808128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10380, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10380' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10380, validity true', () => {
    fireEvent.change(input, { target: { value: '10380' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10410, validity false', () => {
    fireEvent.change(input, { target: { value: '104108128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10410, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10410' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10410, validity true', () => {
    fireEvent.change(input, { target: { value: '10410' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10413, validity false', () => {
    fireEvent.change(input, { target: { value: '104133128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10413, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10413' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10413, validity true', () => {
    fireEvent.change(input, { target: { value: '10413' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10414, validity false', () => {
    fireEvent.change(input, { target: { value: '104142128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10414, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10414' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10414, validity true', () => {
    fireEvent.change(input, { target: { value: '10414' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10430, validity false', () => {
    fireEvent.change(input, { target: { value: '104308128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10430, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10430' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10430, validity true', () => {
    fireEvent.change(input, { target: { value: '10430' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10435, validity false', () => {
    fireEvent.change(input, { target: { value: '104356128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10435, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10435' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10435, validity true', () => {
    fireEvent.change(input, { target: { value: '10435' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10450, validity false', () => {
    fireEvent.change(input, { target: { value: '104507128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10450, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10450' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10450, validity true', () => {
    fireEvent.change(input, { target: { value: '10450' } });
    expect(input.validity.valid).toBe(true);
  });
});
