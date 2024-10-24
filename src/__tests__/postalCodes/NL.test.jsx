import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with NL postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-nl" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.NL);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3761, validity false', () => {
    fireEvent.change(input, { target: { value: '37617128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3761, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3761' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3761, validity true', () => {
    fireEvent.change(input, { target: { value: '3761' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3763, validity false', () => {
    fireEvent.change(input, { target: { value: '37634128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3763, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3763' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3763, validity true', () => {
    fireEvent.change(input, { target: { value: '3763' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3768, validity false', () => {
    fireEvent.change(input, { target: { value: '37681128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3768, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3768' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3768, validity true', () => {
    fireEvent.change(input, { target: { value: '3768' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3513, validity false', () => {
    fireEvent.change(input, { target: { value: '35137128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3513, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3513' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3513, validity true', () => {
    fireEvent.change(input, { target: { value: '3513' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3542, validity false', () => {
    fireEvent.change(input, { target: { value: '35427128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3542, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3542' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3542, validity true', () => {
    fireEvent.change(input, { target: { value: '3542' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3584, validity false', () => {
    fireEvent.change(input, { target: { value: '35840128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3584, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3584' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3584, validity true', () => {
    fireEvent.change(input, { target: { value: '3584' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3959, validity false', () => {
    fireEvent.change(input, { target: { value: '39595128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3959, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3959' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3959, validity true', () => {
    fireEvent.change(input, { target: { value: '3959' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 4131, validity false', () => {
    fireEvent.change(input, { target: { value: '41318128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4131, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 4131' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4131, validity true', () => {
    fireEvent.change(input, { target: { value: '4131' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 4233, validity false', () => {
    fireEvent.change(input, { target: { value: '42334128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4233, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 4233' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4233, validity true', () => {
    fireEvent.change(input, { target: { value: '4233' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 4569, validity false', () => {
    fireEvent.change(input, { target: { value: '45690128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4569, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 4569' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 4569, validity true', () => {
    fireEvent.change(input, { target: { value: '4569' } });
    expect(input.validity.valid).toBe(true);
  });
});
