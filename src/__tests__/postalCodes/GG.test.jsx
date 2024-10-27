import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with GG postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.gg} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.gg);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY10, validity false', () => {
    fireEvent.change(input, { target: { value: 'GY102128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY10, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GY10' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY10, validity true', () => {
    fireEvent.change(input, { target: { value: 'GY10' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GY4, validity false', () => {
    fireEvent.change(input, { target: { value: 'GY44128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY4, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GY4' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY4, validity true', () => {
    fireEvent.change(input, { target: { value: 'GY4' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GY1, validity false', () => {
    fireEvent.change(input, { target: { value: 'GY18128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY1, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GY1' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY1, validity true', () => {
    fireEvent.change(input, { target: { value: 'GY1' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GY8, validity false', () => {
    fireEvent.change(input, { target: { value: 'GY86128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY8, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GY8' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY8, validity true', () => {
    fireEvent.change(input, { target: { value: 'GY8' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GY9, validity false', () => {
    fireEvent.change(input, { target: { value: 'GY92128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY9, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GY9' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY9, validity true', () => {
    fireEvent.change(input, { target: { value: 'GY9' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GY2, validity false', () => {
    fireEvent.change(input, { target: { value: 'GY27128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY2, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GY2' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY2, validity true', () => {
    fireEvent.change(input, { target: { value: 'GY2' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GY6, validity false', () => {
    fireEvent.change(input, { target: { value: 'GY68128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY6, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GY6' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY6, validity true', () => {
    fireEvent.change(input, { target: { value: 'GY6' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GY3, validity false', () => {
    fireEvent.change(input, { target: { value: 'GY33128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY3, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GY3' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY3, validity true', () => {
    fireEvent.change(input, { target: { value: 'GY3' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GY7, validity false', () => {
    fireEvent.change(input, { target: { value: 'GY73128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY7, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GY7' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY7, validity true', () => {
    fireEvent.change(input, { target: { value: 'GY7' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: GY5, validity false', () => {
    fireEvent.change(input, { target: { value: 'GY53128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY5, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ GY5' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: GY5, validity true', () => {
    fireEvent.change(input, { target: { value: 'GY5' } });
    expect(input.validity.valid).toBe(true);
  });
});
