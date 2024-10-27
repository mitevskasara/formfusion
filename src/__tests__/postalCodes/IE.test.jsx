import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with IE postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.ie} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.ie);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: N39, validity false', () => {
    fireEvent.change(input, { target: { value: 'N390128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: N39, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ N39' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: N39, validity true', () => {
    fireEvent.change(input, { target: { value: 'N39' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: P43, validity false', () => {
    fireEvent.change(input, { target: { value: 'P430128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: P43, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ P43' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: P43, validity true', () => {
    fireEvent.change(input, { target: { value: 'P43' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: P67, validity false', () => {
    fireEvent.change(input, { target: { value: 'P674128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: P67, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ P67' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: P67, validity true', () => {
    fireEvent.change(input, { target: { value: 'P67' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: V95, validity false', () => {
    fireEvent.change(input, { target: { value: 'V951128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V95, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ V95' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V95, validity true', () => {
    fireEvent.change(input, { target: { value: 'V95' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: W34, validity false', () => {
    fireEvent.change(input, { target: { value: 'W348128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: W34, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ W34' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: W34, validity true', () => {
    fireEvent.change(input, { target: { value: 'W34' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: P47, validity false', () => {
    fireEvent.change(input, { target: { value: 'P474128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: P47, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ P47' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: P47, validity true', () => {
    fireEvent.change(input, { target: { value: 'P47' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: V92, validity false', () => {
    fireEvent.change(input, { target: { value: 'V920128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V92, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ V92' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V92, validity true', () => {
    fireEvent.change(input, { target: { value: 'V92' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: F45, validity false', () => {
    fireEvent.change(input, { target: { value: 'F458128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: F45, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ F45' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: F45, validity true', () => {
    fireEvent.change(input, { target: { value: 'F45' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: E91, validity false', () => {
    fireEvent.change(input, { target: { value: 'E915128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: E91, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ E91' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: E91, validity true', () => {
    fireEvent.change(input, { target: { value: 'E91' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: V31, validity false', () => {
    fireEvent.change(input, { target: { value: 'V313128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V31, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ V31' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: V31, validity true', () => {
    fireEvent.change(input, { target: { value: 'V31' } });
    expect(input.validity.valid).toBe(true);
  });
});
