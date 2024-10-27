import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with GL postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.gl} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.gl);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3920, validity false', () => {
    fireEvent.change(input, { target: { value: '39205128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3920, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3920' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3920, validity true', () => {
    fireEvent.change(input, { target: { value: '3920' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3910, validity false', () => {
    fireEvent.change(input, { target: { value: '39105128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3910, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3910' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3910, validity true', () => {
    fireEvent.change(input, { target: { value: '3910' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3922, validity false', () => {
    fireEvent.change(input, { target: { value: '39220128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3922, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3922' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3922, validity true', () => {
    fireEvent.change(input, { target: { value: '3922' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3919, validity false', () => {
    fireEvent.change(input, { target: { value: '39196128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3919, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3919' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3919, validity true', () => {
    fireEvent.change(input, { target: { value: '3919' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3980, validity false', () => {
    fireEvent.change(input, { target: { value: '39806128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3980, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3980' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3980, validity true', () => {
    fireEvent.change(input, { target: { value: '3980' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3984, validity false', () => {
    fireEvent.change(input, { target: { value: '39842128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3984, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3984' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3984, validity true', () => {
    fireEvent.change(input, { target: { value: '3984' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3951, validity false', () => {
    fireEvent.change(input, { target: { value: '39512128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3951, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3951' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3951, validity true', () => {
    fireEvent.change(input, { target: { value: '3951' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3955, validity false', () => {
    fireEvent.change(input, { target: { value: '39554128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3955, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3955' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3955, validity true', () => {
    fireEvent.change(input, { target: { value: '3955' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3952, validity false', () => {
    fireEvent.change(input, { target: { value: '39521128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3952, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3952' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3952, validity true', () => {
    fireEvent.change(input, { target: { value: '3952' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 3911, validity false', () => {
    fireEvent.change(input, { target: { value: '39115128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3911, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 3911' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 3911, validity true', () => {
    fireEvent.change(input, { target: { value: '3911' } });
    expect(input.validity.valid).toBe(true);
  });
});
