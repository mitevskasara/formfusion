import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with DO postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.do} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.do);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10102, validity false', () => {
    fireEvent.change(input, { target: { value: '101021128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10102, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10102' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10102, validity true', () => {
    fireEvent.change(input, { target: { value: '10102' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10121, validity false', () => {
    fireEvent.change(input, { target: { value: '101210128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10121, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10121' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10121, validity true', () => {
    fireEvent.change(input, { target: { value: '10121' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10305, validity false', () => {
    fireEvent.change(input, { target: { value: '103055128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10305, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10305' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10305, validity true', () => {
    fireEvent.change(input, { target: { value: '10305' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10306, validity false', () => {
    fireEvent.change(input, { target: { value: '103065128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10306, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10306' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10306, validity true', () => {
    fireEvent.change(input, { target: { value: '10306' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10403, validity false', () => {
    fireEvent.change(input, { target: { value: '104036128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10403, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10403' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10403, validity true', () => {
    fireEvent.change(input, { target: { value: '10403' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10502, validity false', () => {
    fireEvent.change(input, { target: { value: '105021128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10502, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10502' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10502, validity true', () => {
    fireEvent.change(input, { target: { value: '10502' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10702, validity false', () => {
    fireEvent.change(input, { target: { value: '107020128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10702, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10702' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10702, validity true', () => {
    fireEvent.change(input, { target: { value: '10702' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10804, validity false', () => {
    fireEvent.change(input, { target: { value: '108046128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10804, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10804' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10804, validity true', () => {
    fireEvent.change(input, { target: { value: '10804' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10805, validity false', () => {
    fireEvent.change(input, { target: { value: '108058128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10805, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10805' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10805, validity true', () => {
    fireEvent.change(input, { target: { value: '10805' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 10905, validity false', () => {
    fireEvent.change(input, { target: { value: '109053128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10905, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10905' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10905, validity true', () => {
    fireEvent.change(input, { target: { value: '10905' } });
    expect(input.validity.valid).toBe(true);
  });
});
