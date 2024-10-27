import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with IS postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.is} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.is);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 121, validity false', () => {
    fireEvent.change(input, { target: { value: '1217128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 121, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 121' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 121, validity true', () => {
    fireEvent.change(input, { target: { value: '121' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 127, validity false', () => {
    fireEvent.change(input, { target: { value: '1271128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 127, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 127' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 127, validity true', () => {
    fireEvent.change(input, { target: { value: '127' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 545, validity false', () => {
    fireEvent.change(input, { target: { value: '5457128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 545, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 545' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 545, validity true', () => {
    fireEvent.change(input, { target: { value: '545' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 880, validity false', () => {
    fireEvent.change(input, { target: { value: '8805128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 880, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 880' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 880, validity true', () => {
    fireEvent.change(input, { target: { value: '880' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 660, validity false', () => {
    fireEvent.change(input, { target: { value: '6603128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 660, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 660' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 660, validity true', () => {
    fireEvent.change(input, { target: { value: '660' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 765, validity false', () => {
    fireEvent.change(input, { target: { value: '7657128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 765, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 765' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 765, validity true', () => {
    fireEvent.change(input, { target: { value: '765' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 123, validity false', () => {
    fireEvent.change(input, { target: { value: '1234128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 123, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 123' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 123, validity true', () => {
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 370, validity false', () => {
    fireEvent.change(input, { target: { value: '3700128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 370, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 370' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 370, validity true', () => {
    fireEvent.change(input, { target: { value: '370' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 470, validity false', () => {
    fireEvent.change(input, { target: { value: '4708128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 470, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 470' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 470, validity true', () => {
    fireEvent.change(input, { target: { value: '470' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 530, validity false', () => {
    fireEvent.change(input, { target: { value: '5304128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 530, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 530' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 530, validity true', () => {
    fireEvent.change(input, { target: { value: '530' } });
    expect(input.validity.valid).toBe(true);
  });
});
