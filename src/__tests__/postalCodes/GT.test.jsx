import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with GT postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-gt" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.GT);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20006, validity false', () => {
    fireEvent.change(input, { target: { value: '200063128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20006, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20006' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20006, validity true', () => {
    fireEvent.change(input, { target: { value: '20006' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 20012, validity false', () => {
    fireEvent.change(input, { target: { value: '200121128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20012, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20012' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20012, validity true', () => {
    fireEvent.change(input, { target: { value: '20012' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 13037, validity false', () => {
    fireEvent.change(input, { target: { value: '130372128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 13037, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 13037' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 13037, validity true', () => {
    fireEvent.change(input, { target: { value: '13037' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 21007, validity false', () => {
    fireEvent.change(input, { target: { value: '210075128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 21007, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 21007' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 21007, validity true', () => {
    fireEvent.change(input, { target: { value: '21007' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 17001, validity false', () => {
    fireEvent.change(input, { target: { value: '170014128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17001, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 17001' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17001, validity true', () => {
    fireEvent.change(input, { target: { value: '17001' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 17002, validity false', () => {
    fireEvent.change(input, { target: { value: '170026128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17002, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 17002' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17002, validity true', () => {
    fireEvent.change(input, { target: { value: '17002' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 17004, validity false', () => {
    fireEvent.change(input, { target: { value: '170042128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17004, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 17004' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17004, validity true', () => {
    fireEvent.change(input, { target: { value: '17004' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 17013, validity false', () => {
    fireEvent.change(input, { target: { value: '170133128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17013, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 17013' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17013, validity true', () => {
    fireEvent.change(input, { target: { value: '17013' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 17017, validity false', () => {
    fireEvent.change(input, { target: { value: '170174128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17017, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 17017' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17017, validity true', () => {
    fireEvent.change(input, { target: { value: '17017' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 09004, validity false', () => {
    fireEvent.change(input, { target: { value: '090041128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 09004, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 09004' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 09004, validity true', () => {
    fireEvent.change(input, { target: { value: '09004' } });
    expect(input.validity.valid).toBe(true);
  });
});
