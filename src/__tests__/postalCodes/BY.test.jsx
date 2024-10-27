import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with BY postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.by} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.by);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211077, validity false', () => {
    fireEvent.change(input, { target: { value: '2110774128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211077, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 211077' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211077, validity true', () => {
    fireEvent.change(input, { target: { value: '211077' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 211081, validity false', () => {
    fireEvent.change(input, { target: { value: '2110812128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211081, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 211081' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211081, validity true', () => {
    fireEvent.change(input, { target: { value: '211081' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 211140, validity false', () => {
    fireEvent.change(input, { target: { value: '2111400128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211140, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 211140' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211140, validity true', () => {
    fireEvent.change(input, { target: { value: '211140' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 211169, validity false', () => {
    fireEvent.change(input, { target: { value: '2111696128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211169, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 211169' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211169, validity true', () => {
    fireEvent.change(input, { target: { value: '211169' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 211183, validity false', () => {
    fireEvent.change(input, { target: { value: '2111833128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211183, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 211183' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211183, validity true', () => {
    fireEvent.change(input, { target: { value: '211183' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 211200, validity false', () => {
    fireEvent.change(input, { target: { value: '2112003128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211200, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 211200' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211200, validity true', () => {
    fireEvent.change(input, { target: { value: '211200' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 211215, validity false', () => {
    fireEvent.change(input, { target: { value: '2112158128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211215, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 211215' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211215, validity true', () => {
    fireEvent.change(input, { target: { value: '211215' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 211219, validity false', () => {
    fireEvent.change(input, { target: { value: '2112194128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211219, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 211219' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211219, validity true', () => {
    fireEvent.change(input, { target: { value: '211219' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 211227, validity false', () => {
    fireEvent.change(input, { target: { value: '2112274128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211227, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 211227' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211227, validity true', () => {
    fireEvent.change(input, { target: { value: '211227' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 211269, validity false', () => {
    fireEvent.change(input, { target: { value: '2112695128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211269, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 211269' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 211269, validity true', () => {
    fireEvent.change(input, { target: { value: '211269' } });
    expect(input.validity.valid).toBe(true);
  });
});
