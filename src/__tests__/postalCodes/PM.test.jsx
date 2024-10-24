import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with PM postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-pm" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.PM);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97500, validity false', () => {
    fireEvent.change(input, { target: { value: '975000128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97500, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97500' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97500, validity true', () => {
    fireEvent.change(input, { target: { value: '97500' } });
    expect(input.validity.valid).toBe(true);
  });
});
