import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with UA postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.ua} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.ua);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 75663, validity false', () => {
    fireEvent.change(input, { target: { value: '756631128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 75663, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 75663' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 75663, validity true', () => {
    fireEvent.change(input, { target: { value: '75663' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 75731, validity false', () => {
    fireEvent.change(input, { target: { value: '757314128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 75731, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 75731' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 75731, validity true', () => {
    fireEvent.change(input, { target: { value: '75731' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 75742, validity false', () => {
    fireEvent.change(input, { target: { value: '757424128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 75742, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 75742' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 75742, validity true', () => {
    fireEvent.change(input, { target: { value: '75742' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 75809, validity false', () => {
    fireEvent.change(input, { target: { value: '758090128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 75809, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 75809' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 75809, validity true', () => {
    fireEvent.change(input, { target: { value: '75809' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 29004, validity false', () => {
    fireEvent.change(input, { target: { value: '290048128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 29004, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 29004' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 29004, validity true', () => {
    fireEvent.change(input, { target: { value: '29004' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30024, validity false', () => {
    fireEvent.change(input, { target: { value: '300240128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30024, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30024' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30024, validity true', () => {
    fireEvent.change(input, { target: { value: '30024' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30036, validity false', () => {
    fireEvent.change(input, { target: { value: '300367128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30036, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30036' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30036, validity true', () => {
    fireEvent.change(input, { target: { value: '30036' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30040, validity false', () => {
    fireEvent.change(input, { target: { value: '300404128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30040, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30040' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30040, validity true', () => {
    fireEvent.change(input, { target: { value: '30040' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30046, validity false', () => {
    fireEvent.change(input, { target: { value: '300465128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30046, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30046' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30046, validity true', () => {
    fireEvent.change(input, { target: { value: '30046' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30216, validity false', () => {
    fireEvent.change(input, { target: { value: '302160128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30216, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30216' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30216, validity true', () => {
    fireEvent.change(input, { target: { value: '30216' } });
    expect(input.validity.valid).toBe(true);
  });
});
