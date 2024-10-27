import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with WF postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.wf} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.wf);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98610, validity false', () => {
    fireEvent.change(input, { target: { value: '986104128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98610, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98610' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98610, validity true', () => {
    fireEvent.change(input, { target: { value: '98610' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98600, validity false', () => {
    fireEvent.change(input, { target: { value: '986004128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98600, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98600' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98600, validity true', () => {
    fireEvent.change(input, { target: { value: '98600' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98620, validity false', () => {
    fireEvent.change(input, { target: { value: '986200128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98620, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98620' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98620, validity true', () => {
    fireEvent.change(input, { target: { value: '98620' } });
    expect(input.validity.valid).toBe(true);
  });
});
