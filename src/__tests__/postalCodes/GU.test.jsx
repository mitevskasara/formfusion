import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with GU postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.gu} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.gu);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96919, validity false', () => {
    fireEvent.change(input, { target: { value: '969190128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96919, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 96919' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96919, validity true', () => {
    fireEvent.change(input, { target: { value: '96919' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 96932, validity false', () => {
    fireEvent.change(input, { target: { value: '969325128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96932, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 96932' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96932, validity true', () => {
    fireEvent.change(input, { target: { value: '96932' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 96929, validity false', () => {
    fireEvent.change(input, { target: { value: '969291128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96929, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 96929' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96929, validity true', () => {
    fireEvent.change(input, { target: { value: '96929' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 96910, validity false', () => {
    fireEvent.change(input, { target: { value: '969100128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96910, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 96910' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96910, validity true', () => {
    fireEvent.change(input, { target: { value: '96910' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 96914, validity false', () => {
    fireEvent.change(input, { target: { value: '969144128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96914, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 96914' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96914, validity true', () => {
    fireEvent.change(input, { target: { value: '96914' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 96923, validity false', () => {
    fireEvent.change(input, { target: { value: '969230128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96923, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 96923' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96923, validity true', () => {
    fireEvent.change(input, { target: { value: '96923' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 96926, validity false', () => {
    fireEvent.change(input, { target: { value: '969267128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96926, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 96926' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96926, validity true', () => {
    fireEvent.change(input, { target: { value: '96926' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 96916, validity false', () => {
    fireEvent.change(input, { target: { value: '969166128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96916, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 96916' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96916, validity true', () => {
    fireEvent.change(input, { target: { value: '96916' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 96925, validity false', () => {
    fireEvent.change(input, { target: { value: '969257128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96925, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 96925' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96925, validity true', () => {
    fireEvent.change(input, { target: { value: '96925' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 96911, validity false', () => {
    fireEvent.change(input, { target: { value: '969118128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96911, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 96911' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 96911, validity true', () => {
    fireEvent.change(input, { target: { value: '96911' } });
    expect(input.validity.valid).toBe(true);
  });
});
