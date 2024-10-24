import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with AU postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-au" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.AU);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2134, validity false', () => {
    fireEvent.change(input, { target: { value: '21347128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2134, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2134' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2134, validity true', () => {
    fireEvent.change(input, { target: { value: '2134' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2137, validity false', () => {
    fireEvent.change(input, { target: { value: '21373128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2137, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2137' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2137, validity true', () => {
    fireEvent.change(input, { target: { value: '2137' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2138, validity false', () => {
    fireEvent.change(input, { target: { value: '21386128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2138, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2138' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2138, validity true', () => {
    fireEvent.change(input, { target: { value: '2138' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2140, validity false', () => {
    fireEvent.change(input, { target: { value: '21407128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2140, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2140' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2140, validity true', () => {
    fireEvent.change(input, { target: { value: '2140' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2148, validity false', () => {
    fireEvent.change(input, { target: { value: '21487128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2148, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2148' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2148, validity true', () => {
    fireEvent.change(input, { target: { value: '2148' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2168, validity false', () => {
    fireEvent.change(input, { target: { value: '21681128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2168, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2168' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2168, validity true', () => {
    fireEvent.change(input, { target: { value: '2168' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2170, validity false', () => {
    fireEvent.change(input, { target: { value: '21706128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2170, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2170' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2170, validity true', () => {
    fireEvent.change(input, { target: { value: '2170' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2176, validity false', () => {
    fireEvent.change(input, { target: { value: '21763128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2176, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2176' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2176, validity true', () => {
    fireEvent.change(input, { target: { value: '2176' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2203, validity false', () => {
    fireEvent.change(input, { target: { value: '22033128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2203, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2203' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2203, validity true', () => {
    fireEvent.change(input, { target: { value: '2203' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2220, validity false', () => {
    fireEvent.change(input, { target: { value: '22204128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2220, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2220' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2220, validity true', () => {
    fireEvent.change(input, { target: { value: '2220' } });
    expect(input.validity.valid).toBe(true);
  });
});
