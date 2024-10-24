import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with RU postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-ru" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.RU);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175032, validity false', () => {
    fireEvent.change(input, { target: { value: '1750321128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175032, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 175032' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175032, validity true', () => {
    fireEvent.change(input, { target: { value: '175032' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 175111, validity false', () => {
    fireEvent.change(input, { target: { value: '1751111128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175111, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 175111' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175111, validity true', () => {
    fireEvent.change(input, { target: { value: '175111' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 175130, validity false', () => {
    fireEvent.change(input, { target: { value: '1751304128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175130, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 175130' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175130, validity true', () => {
    fireEvent.change(input, { target: { value: '175130' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 175217, validity false', () => {
    fireEvent.change(input, { target: { value: '1752177128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175217, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 175217' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175217, validity true', () => {
    fireEvent.change(input, { target: { value: '175217' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 175222, validity false', () => {
    fireEvent.change(input, { target: { value: '1752224128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175222, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 175222' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175222, validity true', () => {
    fireEvent.change(input, { target: { value: '175222' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 175303, validity false', () => {
    fireEvent.change(input, { target: { value: '1753030128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175303, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 175303' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175303, validity true', () => {
    fireEvent.change(input, { target: { value: '175303' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 175315, validity false', () => {
    fireEvent.change(input, { target: { value: '1753154128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175315, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 175315' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175315, validity true', () => {
    fireEvent.change(input, { target: { value: '175315' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 175330, validity false', () => {
    fireEvent.change(input, { target: { value: '1753305128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175330, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 175330' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 175330, validity true', () => {
    fireEvent.change(input, { target: { value: '175330' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 630073, validity false', () => {
    fireEvent.change(input, { target: { value: '6300730128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 630073, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 630073' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 630073, validity true', () => {
    fireEvent.change(input, { target: { value: '630073' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 632133, validity false', () => {
    fireEvent.change(input, { target: { value: '6321336128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 632133, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 632133' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 632133, validity true', () => {
    fireEvent.change(input, { target: { value: '632133' } });
    expect(input.validity.valid).toBe(true);
  });
});
