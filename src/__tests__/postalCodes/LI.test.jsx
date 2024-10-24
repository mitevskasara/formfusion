import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with LI postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-li" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.LI);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9488, validity false', () => {
    fireEvent.change(input, { target: { value: '94884128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9488, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9488' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9488, validity true', () => {
    fireEvent.change(input, { target: { value: '9488' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9485, validity false', () => {
    fireEvent.change(input, { target: { value: '94851128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9485, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9485' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9485, validity true', () => {
    fireEvent.change(input, { target: { value: '9485' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9494, validity false', () => {
    fireEvent.change(input, { target: { value: '94945128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9494, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9494' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9494, validity true', () => {
    fireEvent.change(input, { target: { value: '9494' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9493, validity false', () => {
    fireEvent.change(input, { target: { value: '94932128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9493, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9493' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9493, validity true', () => {
    fireEvent.change(input, { target: { value: '9493' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9495, validity false', () => {
    fireEvent.change(input, { target: { value: '94950128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9495, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9495' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9495, validity true', () => {
    fireEvent.change(input, { target: { value: '9495' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9486, validity false', () => {
    fireEvent.change(input, { target: { value: '94860128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9486, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9486' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9486, validity true', () => {
    fireEvent.change(input, { target: { value: '9486' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9492, validity false', () => {
    fireEvent.change(input, { target: { value: '94924128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9492, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9492' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9492, validity true', () => {
    fireEvent.change(input, { target: { value: '9492' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9487, validity false', () => {
    fireEvent.change(input, { target: { value: '94874128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9487, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9487' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9487, validity true', () => {
    fireEvent.change(input, { target: { value: '9487' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9496, validity false', () => {
    fireEvent.change(input, { target: { value: '94962128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9496, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9496' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9496, validity true', () => {
    fireEvent.change(input, { target: { value: '9496' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9497, validity false', () => {
    fireEvent.change(input, { target: { value: '94976128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9497, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9497' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9497, validity true', () => {
    fireEvent.change(input, { target: { value: '9497' } });
    expect(input.validity.valid).toBe(true);
  });
});
