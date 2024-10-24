import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with MX postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-mx" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.MX);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28785, validity false', () => {
    fireEvent.change(input, { target: { value: '287855128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28785, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 28785' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28785, validity true', () => {
    fireEvent.change(input, { target: { value: '28785' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 28134, validity false', () => {
    fireEvent.change(input, { target: { value: '281341128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28134, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 28134' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28134, validity true', () => {
    fireEvent.change(input, { target: { value: '28134' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 28970, validity false', () => {
    fireEvent.change(input, { target: { value: '289700128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28970, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 28970' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28970, validity true', () => {
    fireEvent.change(input, { target: { value: '28970' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 28979, validity false', () => {
    fireEvent.change(input, { target: { value: '289791128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28979, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 28979' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28979, validity true', () => {
    fireEvent.change(input, { target: { value: '28979' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 28982, validity false', () => {
    fireEvent.change(input, { target: { value: '289821128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28982, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 28982' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 28982, validity true', () => {
    fireEvent.change(input, { target: { value: '28982' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30590, validity false', () => {
    fireEvent.change(input, { target: { value: '305904128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30590, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30590' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30590, validity true', () => {
    fireEvent.change(input, { target: { value: '30590' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30593, validity false', () => {
    fireEvent.change(input, { target: { value: '305938128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30593, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30593' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30593, validity true', () => {
    fireEvent.change(input, { target: { value: '30593' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30595, validity false', () => {
    fireEvent.change(input, { target: { value: '305957128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30595, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30595' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30595, validity true', () => {
    fireEvent.change(input, { target: { value: '30595' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30597, validity false', () => {
    fireEvent.change(input, { target: { value: '305978128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30597, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30597' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30597, validity true', () => {
    fireEvent.change(input, { target: { value: '30597' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 29377, validity false', () => {
    fireEvent.change(input, { target: { value: '293774128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 29377, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 29377' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 29377, validity true', () => {
    fireEvent.change(input, { target: { value: '29377' } });
    expect(input.validity.valid).toBe(true);
  });
});
