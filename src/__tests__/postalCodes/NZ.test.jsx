import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with NZ postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-nz" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.NZ);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0632, validity false', () => {
    fireEvent.change(input, { target: { value: '06325128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0632, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 0632' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0632, validity true', () => {
    fireEvent.change(input, { target: { value: '0632' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 0910, validity false', () => {
    fireEvent.change(input, { target: { value: '09107128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0910, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 0910' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 0910, validity true', () => {
    fireEvent.change(input, { target: { value: '0910' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1062, validity false', () => {
    fireEvent.change(input, { target: { value: '10623128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1062, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1062' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1062, validity true', () => {
    fireEvent.change(input, { target: { value: '1062' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1150, validity false', () => {
    fireEvent.change(input, { target: { value: '11501128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1150, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1150' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1150, validity true', () => {
    fireEvent.change(input, { target: { value: '1150' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 1642, validity false', () => {
    fireEvent.change(input, { target: { value: '16422128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1642, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 1642' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 1642, validity true', () => {
    fireEvent.change(input, { target: { value: '1642' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2014, validity false', () => {
    fireEvent.change(input, { target: { value: '20141128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2014, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2014' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2014, validity true', () => {
    fireEvent.change(input, { target: { value: '2014' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2341, validity false', () => {
    fireEvent.change(input, { target: { value: '23418128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2341, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2341' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2341, validity true', () => {
    fireEvent.change(input, { target: { value: '2341' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2576, validity false', () => {
    fireEvent.change(input, { target: { value: '25764128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2576, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2576' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2576, validity true', () => {
    fireEvent.change(input, { target: { value: '2576' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 2693, validity false', () => {
    fireEvent.change(input, { target: { value: '26935128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2693, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 2693' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 2693, validity true', () => {
    fireEvent.change(input, { target: { value: '2693' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3146, validity false', () => {
    fireEvent.change(input, { target: { value: '31466128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3146, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3146' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3146, validity true', () => {
    fireEvent.change(input, { target: { value: '3146' } });
    expect(input.validity.valid).toBe(true);
  });
});
