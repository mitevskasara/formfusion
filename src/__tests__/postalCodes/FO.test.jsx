import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with FO postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-fo" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.FO);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 188, validity false', () => {
    fireEvent.change(input, { target: { value: '1882128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 188, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 188' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 188, validity true', () => {
    fireEvent.change(input, { target: { value: '188' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 511, validity false', () => {
    fireEvent.change(input, { target: { value: '5110128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 511, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 511' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 511, validity true', () => {
    fireEvent.change(input, { target: { value: '511' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 656, validity false', () => {
    fireEvent.change(input, { target: { value: '6568128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 656, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 656' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 656, validity true', () => {
    fireEvent.change(input, { target: { value: '656' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 735, validity false', () => {
    fireEvent.change(input, { target: { value: '7354128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 735, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 735' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 735, validity true', () => {
    fireEvent.change(input, { target: { value: '735' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 178, validity false', () => {
    fireEvent.change(input, { target: { value: '1785128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 178, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 178' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 178, validity true', () => {
    fireEvent.change(input, { target: { value: '178' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 850, validity false', () => {
    fireEvent.change(input, { target: { value: '8500128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 850, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 850' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 850, validity true', () => {
    fireEvent.change(input, { target: { value: '850' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 160, validity false', () => {
    fireEvent.change(input, { target: { value: '1600128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 160, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 160' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 160, validity true', () => {
    fireEvent.change(input, { target: { value: '160' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 215, validity false', () => {
    fireEvent.change(input, { target: { value: '2155128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 215, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 215' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 215, validity true', () => {
    fireEvent.change(input, { target: { value: '215' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 726, validity false', () => {
    fireEvent.change(input, { target: { value: '7264128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 726, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 726' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 726, validity true', () => {
    fireEvent.change(input, { target: { value: '726' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 285, validity false', () => {
    fireEvent.change(input, { target: { value: '2853128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 285, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 285' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 285, validity true', () => {
    fireEvent.change(input, { target: { value: '285' } });
    expect(input.validity.valid).toBe(true);
  });
});
