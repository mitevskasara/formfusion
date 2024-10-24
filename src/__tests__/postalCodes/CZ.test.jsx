import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with CZ postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-cz" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.CZ);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 294 01, validity false', () => {
    fireEvent.change(input, { target: { value: '294 015128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 294 01, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 294 01' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 294 01, validity true', () => {
    fireEvent.change(input, { target: { value: '294 01' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 294 04, validity false', () => {
    fireEvent.change(input, { target: { value: '294 045128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 294 04, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 294 04' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 294 04, validity true', () => {
    fireEvent.change(input, { target: { value: '294 04' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 294 74, validity false', () => {
    fireEvent.change(input, { target: { value: '294 742128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 294 74, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 294 74' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 294 74, validity true', () => {
    fireEvent.change(input, { target: { value: '294 74' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 294 79, validity false', () => {
    fireEvent.change(input, { target: { value: '294 795128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 294 79, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 294 79' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 294 79, validity true', () => {
    fireEvent.change(input, { target: { value: '294 79' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 288 02, validity false', () => {
    fireEvent.change(input, { target: { value: '288 022128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 288 02, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 288 02' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 288 02, validity true', () => {
    fireEvent.change(input, { target: { value: '288 02' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 289 01, validity false', () => {
    fireEvent.change(input, { target: { value: '289 012128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 289 01, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 289 01' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 289 01, validity true', () => {
    fireEvent.change(input, { target: { value: '289 01' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 289 12, validity false', () => {
    fireEvent.change(input, { target: { value: '289 124128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 289 12, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 289 12' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 289 12, validity true', () => {
    fireEvent.change(input, { target: { value: '289 12' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 289 26, validity false', () => {
    fireEvent.change(input, { target: { value: '289 263128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 289 26, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 289 26' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 289 26, validity true', () => {
    fireEvent.change(input, { target: { value: '289 26' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 289 32, validity false', () => {
    fireEvent.change(input, { target: { value: '289 320128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 289 32, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 289 32' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 289 32, validity true', () => {
    fireEvent.change(input, { target: { value: '289 32' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 289 33, validity false', () => {
    fireEvent.change(input, { target: { value: '289 330128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 289 33, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 289 33' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 289 33, validity true', () => {
    fireEvent.change(input, { target: { value: '289 33' } });
    expect(input.validity.valid).toBe(true);
  });
});
