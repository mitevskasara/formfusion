import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with CR postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-cr" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.CR);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20201, validity false', () => {
    fireEvent.change(input, { target: { value: '202014128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20201, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20201' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20201, validity true', () => {
    fireEvent.change(input, { target: { value: '20201' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 20503, validity false', () => {
    fireEvent.change(input, { target: { value: '205038128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20503, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20503' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20503, validity true', () => {
    fireEvent.change(input, { target: { value: '20503' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 21013, validity false', () => {
    fireEvent.change(input, { target: { value: '210138128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 21013, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 21013' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 21013, validity true', () => {
    fireEvent.change(input, { target: { value: '21013' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 21305, validity false', () => {
    fireEvent.change(input, { target: { value: '213056128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 21305, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 21305' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 21305, validity true', () => {
    fireEvent.change(input, { target: { value: '21305' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30705, validity false', () => {
    fireEvent.change(input, { target: { value: '307053128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30705, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30705' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30705, validity true', () => {
    fireEvent.change(input, { target: { value: '30705' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 50102, validity false', () => {
    fireEvent.change(input, { target: { value: '501024128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 50102, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 50102' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 50102, validity true', () => {
    fireEvent.change(input, { target: { value: '50102' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 50201, validity false', () => {
    fireEvent.change(input, { target: { value: '502014128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 50201, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 50201' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 50201, validity true', () => {
    fireEvent.change(input, { target: { value: '50201' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 50904, validity false', () => {
    fireEvent.change(input, { target: { value: '509040128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 50904, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 50904' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 50904, validity true', () => {
    fireEvent.change(input, { target: { value: '50904' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 40206, validity false', () => {
    fireEvent.change(input, { target: { value: '402067128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 40206, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 40206' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 40206, validity true', () => {
    fireEvent.change(input, { target: { value: '40206' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 40308, validity false', () => {
    fireEvent.change(input, { target: { value: '403081128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 40308, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 40308' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 40308, validity true', () => {
    fireEvent.change(input, { target: { value: '40308' } });
    expect(input.validity.valid).toBe(true);
  });
});
