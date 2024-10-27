import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with MC postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.mc} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.mc);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98000, validity false', () => {
    fireEvent.change(input, { target: { value: '980001128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98000, validity true', () => {
    fireEvent.change(input, { target: { value: '98000' } });
    expect(input.validity.valid).toBe(true);
  });
});
