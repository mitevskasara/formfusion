import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with GP postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.gp} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.gp);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97171 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97171 CEDEX4128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97171 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97171 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97171 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97171 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97122, validity false', () => {
    fireEvent.change(input, { target: { value: '971224128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97122, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97122' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97122, validity true', () => {
    fireEvent.change(input, { target: { value: '97122' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97176 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97176 CEDEX3128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97176 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97176 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97176 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97176 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97185 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97185 CEDEX6128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97185 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97185 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97185 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97185 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97029 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97029 CEDEX6128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97029 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97029 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97029 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97029 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97189 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97189 CEDEX3128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97189 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97189 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97189 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97189 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97006 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97006 CEDEX0128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97006 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97006 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97006 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97006 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97142, validity false', () => {
    fireEvent.change(input, { target: { value: '971426128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97142, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97142' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97142, validity true', () => {
    fireEvent.change(input, { target: { value: '97142' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97190, validity false', () => {
    fireEvent.change(input, { target: { value: '971904128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97190, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97190' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97190, validity true', () => {
    fireEvent.change(input, { target: { value: '97190' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97136, validity false', () => {
    fireEvent.change(input, { target: { value: '971360128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97136, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97136' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97136, validity true', () => {
    fireEvent.change(input, { target: { value: '97136' } });
    expect(input.validity.valid).toBe(true);
  });
});
