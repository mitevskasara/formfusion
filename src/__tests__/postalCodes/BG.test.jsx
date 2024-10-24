import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with BG postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-bg" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.BG);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8154, validity false', () => {
    fireEvent.change(input, { target: { value: '81543128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8154, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 8154' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8154, validity true', () => {
    fireEvent.change(input, { target: { value: '8154' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 8444, validity false', () => {
    fireEvent.change(input, { target: { value: '84446128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8444, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 8444' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8444, validity true', () => {
    fireEvent.change(input, { target: { value: '8444' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 8477, validity false', () => {
    fireEvent.change(input, { target: { value: '84775128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8477, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 8477' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8477, validity true', () => {
    fireEvent.change(input, { target: { value: '8477' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 8218, validity false', () => {
    fireEvent.change(input, { target: { value: '82181128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8218, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 8218' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8218, validity true', () => {
    fireEvent.change(input, { target: { value: '8218' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 8225, validity false', () => {
    fireEvent.change(input, { target: { value: '82252128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8225, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 8225' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8225, validity true', () => {
    fireEvent.change(input, { target: { value: '8225' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 8558, validity false', () => {
    fireEvent.change(input, { target: { value: '85584128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8558, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 8558' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8558, validity true', () => {
    fireEvent.change(input, { target: { value: '8558' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 8440, validity false', () => {
    fireEvent.change(input, { target: { value: '84400128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8440, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 8440' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 8440, validity true', () => {
    fireEvent.change(input, { target: { value: '8440' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2969, validity false', () => {
    fireEvent.change(input, { target: { value: '29693128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2969, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2969' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2969, validity true', () => {
    fireEvent.change(input, { target: { value: '2969' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2862, validity false', () => {
    fireEvent.change(input, { target: { value: '28627128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2862, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2862' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2862, validity true', () => {
    fireEvent.change(input, { target: { value: '2862' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2884, validity false', () => {
    fireEvent.change(input, { target: { value: '28845128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2884, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2884' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2884, validity true', () => {
    fireEvent.change(input, { target: { value: '2884' } });
    expect(input.validity.valid).toBe(true);
  });
});
