import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with MA postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.ma} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.ma);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 91036, validity false', () => {
    fireEvent.change(input, { target: { value: '910368128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 91036, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 91036' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 91036, validity true', () => {
    fireEvent.change(input, { target: { value: '91036' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 94025, validity false', () => {
    fireEvent.change(input, { target: { value: '940258128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 94025, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 94025' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 94025, validity true', () => {
    fireEvent.change(input, { target: { value: '94025' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 94031, validity false', () => {
    fireEvent.change(input, { target: { value: '940311128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 94031, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 94031' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 94031, validity true', () => {
    fireEvent.change(input, { target: { value: '94031' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 93250, validity false', () => {
    fireEvent.change(input, { target: { value: '932505128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 93250, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 93250' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 93250, validity true', () => {
    fireEvent.change(input, { target: { value: '93250' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 63672, validity false', () => {
    fireEvent.change(input, { target: { value: '636727128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 63672, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 63672' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 63672, validity true', () => {
    fireEvent.change(input, { target: { value: '63672' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 62672, validity false', () => {
    fireEvent.change(input, { target: { value: '626727128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 62672, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 62672' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 62672, validity true', () => {
    fireEvent.change(input, { target: { value: '62672' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 60023, validity false', () => {
    fireEvent.change(input, { target: { value: '600237128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 60023, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 60023' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 60023, validity true', () => {
    fireEvent.change(input, { target: { value: '60023' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 50046, validity false', () => {
    fireEvent.change(input, { target: { value: '500462128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 50046, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 50046' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 50046, validity true', () => {
    fireEvent.change(input, { target: { value: '50046' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 50382, validity false', () => {
    fireEvent.change(input, { target: { value: '503828128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 50382, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 50382' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 50382, validity true', () => {
    fireEvent.change(input, { target: { value: '50382' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 33352, validity false', () => {
    fireEvent.change(input, { target: { value: '333528128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33352, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 33352' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 33352, validity true', () => {
    fireEvent.change(input, { target: { value: '33352' } });
    expect(input.validity.valid).toBe(true);
  });
});
