import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with AR postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-ar" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.AR);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9011, validity false', () => {
    fireEvent.change(input, { target: { value: '90110128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9011, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9011' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9011, validity true', () => {
    fireEvent.change(input, { target: { value: '9011' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9017, validity false', () => {
    fireEvent.change(input, { target: { value: '90178128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9017, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9017' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9017, validity true', () => {
    fireEvent.change(input, { target: { value: '9017' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9051, validity false', () => {
    fireEvent.change(input, { target: { value: '90512128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9051, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9051' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9051, validity true', () => {
    fireEvent.change(input, { target: { value: '9051' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9303, validity false', () => {
    fireEvent.change(input, { target: { value: '93030128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9303, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9303' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9303, validity true', () => {
    fireEvent.change(input, { target: { value: '9303' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9313, validity false', () => {
    fireEvent.change(input, { target: { value: '93133128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9313, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9313' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9313, validity true', () => {
    fireEvent.change(input, { target: { value: '9313' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 9400, validity false', () => {
    fireEvent.change(input, { target: { value: '94008128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9400, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 9400' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 9400, validity true', () => {
    fireEvent.change(input, { target: { value: '9400' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 4724, validity false', () => {
    fireEvent.change(input, { target: { value: '47242128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4724, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 4724' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4724, validity true', () => {
    fireEvent.change(input, { target: { value: '4724' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 4726, validity false', () => {
    fireEvent.change(input, { target: { value: '47263128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4726, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 4726' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4726, validity true', () => {
    fireEvent.change(input, { target: { value: '4726' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 4728, validity false', () => {
    fireEvent.change(input, { target: { value: '47288128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4728, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 4728' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4728, validity true', () => {
    fireEvent.change(input, { target: { value: '4728' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 4743, validity false', () => {
    fireEvent.change(input, { target: { value: '47434128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4743, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 4743' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4743, validity true', () => {
    fireEvent.change(input, { target: { value: '4743' } });
    expect(input.validity.valid).toBe(true);
  });
});
