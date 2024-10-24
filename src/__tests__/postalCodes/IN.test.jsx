import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with IN postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-in" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.IN);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 585290, validity false', () => {
    fireEvent.change(input, { target: { value: '5852905128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 585290, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 585290' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 585290, validity true', () => {
    fireEvent.change(input, { target: { value: '585290' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 585321, validity false', () => {
    fireEvent.change(input, { target: { value: '5853214128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 585321, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 585321' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 585321, validity true', () => {
    fireEvent.change(input, { target: { value: '585321' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 561208, validity false', () => {
    fireEvent.change(input, { target: { value: '5612080128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 561208, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 561208' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 561208, validity true', () => {
    fireEvent.change(input, { target: { value: '561208' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 562102, validity false', () => {
    fireEvent.change(input, { target: { value: '5621024128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 562102, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 562102' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 562102, validity true', () => {
    fireEvent.change(input, { target: { value: '562102' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 562104, validity false', () => {
    fireEvent.change(input, { target: { value: '5621047128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 562104, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 562104' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 562104, validity true', () => {
    fireEvent.change(input, { target: { value: '562104' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 563130, validity false', () => {
    fireEvent.change(input, { target: { value: '5631300128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 563130, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 563130' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 563130, validity true', () => {
    fireEvent.change(input, { target: { value: '563130' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 563131, validity false', () => {
    fireEvent.change(input, { target: { value: '5631316128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 563131, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 563131' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 563131, validity true', () => {
    fireEvent.change(input, { target: { value: '563131' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 563137, validity false', () => {
    fireEvent.change(input, { target: { value: '5631377128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 563137, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 563137' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 563137, validity true', () => {
    fireEvent.change(input, { target: { value: '563137' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 561209, validity false', () => {
    fireEvent.change(input, { target: { value: '5612094128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 561209, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 561209' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 561209, validity true', () => {
    fireEvent.change(input, { target: { value: '561209' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 562101, validity false', () => {
    fireEvent.change(input, { target: { value: '5621015128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 562101, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 562101' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 562101, validity true', () => {
    fireEvent.change(input, { target: { value: '562101' } });
    expect(input.validity.valid).toBe(true);
  });
});
