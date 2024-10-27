import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with IM postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.im} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.im);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM6, validity false', () => {
    fireEvent.change(input, { target: { value: 'IM62128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM6, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ IM6' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM6, validity true', () => {
    fireEvent.change(input, { target: { value: 'IM6' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: IM4, validity false', () => {
    fireEvent.change(input, { target: { value: 'IM48128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM4, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ IM4' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM4, validity true', () => {
    fireEvent.change(input, { target: { value: 'IM4' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: IM9, validity false', () => {
    fireEvent.change(input, { target: { value: 'IM94128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM9, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ IM9' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM9, validity true', () => {
    fireEvent.change(input, { target: { value: 'IM9' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: IM7, validity false', () => {
    fireEvent.change(input, { target: { value: 'IM77128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM7, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ IM7' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM7, validity true', () => {
    fireEvent.change(input, { target: { value: 'IM7' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: IM5, validity false', () => {
    fireEvent.change(input, { target: { value: 'IM57128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM5, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ IM5' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM5, validity true', () => {
    fireEvent.change(input, { target: { value: 'IM5' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: IM2, validity false', () => {
    fireEvent.change(input, { target: { value: 'IM21128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM2, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ IM2' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM2, validity true', () => {
    fireEvent.change(input, { target: { value: 'IM2' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: IM8, validity false', () => {
    fireEvent.change(input, { target: { value: 'IM85128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM8, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ IM8' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM8, validity true', () => {
    fireEvent.change(input, { target: { value: 'IM8' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: IM3, validity false', () => {
    fireEvent.change(input, { target: { value: 'IM37128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM3, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ IM3' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM3, validity true', () => {
    fireEvent.change(input, { target: { value: 'IM3' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: IM1, validity false', () => {
    fireEvent.change(input, { target: { value: 'IM10128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM1, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ IM1' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: IM1, validity true', () => {
    fireEvent.change(input, { target: { value: 'IM1' } });
    expect(input.validity.valid).toBe(true);
  });
});
