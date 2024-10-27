import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with MW postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.mw} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.mw);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 201102, validity false', () => {
    fireEvent.change(input, { target: { value: '2011021128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 201102, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 201102' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 201102, validity true', () => {
    fireEvent.change(input, { target: { value: '201102' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 201110, validity false', () => {
    fireEvent.change(input, { target: { value: '2011106128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 201110, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 201110' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 201110, validity true', () => {
    fireEvent.change(input, { target: { value: '201110' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 201121, validity false', () => {
    fireEvent.change(input, { target: { value: '2011214128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 201121, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 201121' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 201121, validity true', () => {
    fireEvent.change(input, { target: { value: '201121' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 201304, validity false', () => {
    fireEvent.change(input, { target: { value: '2013042128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 201304, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 201304' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 201304, validity true', () => {
    fireEvent.change(input, { target: { value: '201304' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 206101, validity false', () => {
    fireEvent.change(input, { target: { value: '2061018128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 206101, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 206101' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 206101, validity true', () => {
    fireEvent.change(input, { target: { value: '206101' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 207218, validity false', () => {
    fireEvent.change(input, { target: { value: '2072181128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 207218, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 207218' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 207218, validity true', () => {
    fireEvent.change(input, { target: { value: '207218' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 207221, validity false', () => {
    fireEvent.change(input, { target: { value: '2072213128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 207221, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 207221' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 207221, validity true', () => {
    fireEvent.change(input, { target: { value: '207221' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 207233, validity false', () => {
    fireEvent.change(input, { target: { value: '2072330128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 207233, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 207233' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 207233, validity true', () => {
    fireEvent.change(input, { target: { value: '207233' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 207240, validity false', () => {
    fireEvent.change(input, { target: { value: '2072406128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 207240, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 207240' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 207240, validity true', () => {
    fireEvent.change(input, { target: { value: '207240' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 207243, validity false', () => {
    fireEvent.change(input, { target: { value: '2072431128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 207243, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 207243' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 207243, validity true', () => {
    fireEvent.change(input, { target: { value: '207243' } });
    expect(input.validity.valid).toBe(true);
  });
});
