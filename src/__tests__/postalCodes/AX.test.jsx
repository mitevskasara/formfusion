import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with AX postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.ax} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.ax);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22111, validity false', () => {
    fireEvent.change(input, { target: { value: '221115128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22111, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22111' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22111, validity true', () => {
    fireEvent.change(input, { target: { value: '22111' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22310, validity false', () => {
    fireEvent.change(input, { target: { value: '223107128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22310, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22310' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22310, validity true', () => {
    fireEvent.change(input, { target: { value: '22310' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22720, validity false', () => {
    fireEvent.change(input, { target: { value: '227205128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22720, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22720' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22720, validity true', () => {
    fireEvent.change(input, { target: { value: '22720' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22920, validity false', () => {
    fireEvent.change(input, { target: { value: '229207128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22920, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22920' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22920, validity true', () => {
    fireEvent.change(input, { target: { value: '22920' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22610, validity false', () => {
    fireEvent.change(input, { target: { value: '226100128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22610, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22610' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22610, validity true', () => {
    fireEvent.change(input, { target: { value: '22610' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22151, validity false', () => {
    fireEvent.change(input, { target: { value: '221510128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22151, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22151' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22151, validity true', () => {
    fireEvent.change(input, { target: { value: '22151' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22150, validity false', () => {
    fireEvent.change(input, { target: { value: '221505128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22150, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22150' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22150, validity true', () => {
    fireEvent.change(input, { target: { value: '22150' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22940, validity false', () => {
    fireEvent.change(input, { target: { value: '229402128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22940, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22940' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22940, validity true', () => {
    fireEvent.change(input, { target: { value: '22940' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22140, validity false', () => {
    fireEvent.change(input, { target: { value: '221400128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22140, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22140' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22140, validity true', () => {
    fireEvent.change(input, { target: { value: '22140' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22411, validity false', () => {
    fireEvent.change(input, { target: { value: '224110128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22411, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22411' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22411, validity true', () => {
    fireEvent.change(input, { target: { value: '22411' } });
    expect(input.validity.valid).toBe(true);
  });
});
