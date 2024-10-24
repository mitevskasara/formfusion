import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with SE postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-se" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.SE);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 186 24, validity false', () => {
    fireEvent.change(input, { target: { value: '186 243128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 186 24, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 186 24' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 186 24, validity true', () => {
    fireEvent.change(input, { target: { value: '186 24' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 186 97, validity false', () => {
    fireEvent.change(input, { target: { value: '186 977128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 186 97, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 186 97' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 186 97, validity true', () => {
    fireEvent.change(input, { target: { value: '186 97' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 184 26, validity false', () => {
    fireEvent.change(input, { target: { value: '184 264128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 184 26, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 184 26' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 184 26, validity true', () => {
    fireEvent.change(input, { target: { value: '184 26' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 175 46, validity false', () => {
    fireEvent.change(input, { target: { value: '175 467128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175 46, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 175 46' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175 46, validity true', () => {
    fireEvent.change(input, { target: { value: '175 46' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 177 38, validity false', () => {
    fireEvent.change(input, { target: { value: '177 381128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 177 38, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 177 38' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 177 38, validity true', () => {
    fireEvent.change(input, { target: { value: '177 38' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 177 54, validity false', () => {
    fireEvent.change(input, { target: { value: '177 545128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 177 54, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 177 54' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 177 54, validity true', () => {
    fireEvent.change(input, { target: { value: '177 54' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 179 03, validity false', () => {
    fireEvent.change(input, { target: { value: '179 031128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 179 03, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 179 03' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 179 03, validity true', () => {
    fireEvent.change(input, { target: { value: '179 03' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 179 61, validity false', () => {
    fireEvent.change(input, { target: { value: '179 616128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 179 61, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 179 61' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 179 61, validity true', () => {
    fireEvent.change(input, { target: { value: '179 61' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 141 53, validity false', () => {
    fireEvent.change(input, { target: { value: '141 537128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 141 53, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 141 53' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 141 53, validity true', () => {
    fireEvent.change(input, { target: { value: '141 53' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 141 62, validity false', () => {
    fireEvent.change(input, { target: { value: '141 620128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 141 62, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 141 62' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 141 62, validity true', () => {
    fireEvent.change(input, { target: { value: '141 62' } });
    expect(input.validity.valid).toBe(true);
  });
});
