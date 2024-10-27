import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with KR postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.kr} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.kr);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51315, validity false', () => {
    fireEvent.change(input, { target: { value: '513154128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51315, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 51315' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51315, validity true', () => {
    fireEvent.change(input, { target: { value: '51315' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 51324, validity false', () => {
    fireEvent.change(input, { target: { value: '513244128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51324, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 51324' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51324, validity true', () => {
    fireEvent.change(input, { target: { value: '51324' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 51356, validity false', () => {
    fireEvent.change(input, { target: { value: '513563128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51356, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 51356' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51356, validity true', () => {
    fireEvent.change(input, { target: { value: '51356' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 51368, validity false', () => {
    fireEvent.change(input, { target: { value: '513688128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51368, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 51368' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51368, validity true', () => {
    fireEvent.change(input, { target: { value: '51368' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 51369, validity false', () => {
    fireEvent.change(input, { target: { value: '513690128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51369, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 51369' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51369, validity true', () => {
    fireEvent.change(input, { target: { value: '51369' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 51412, validity false', () => {
    fireEvent.change(input, { target: { value: '514121128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51412, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 51412' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51412, validity true', () => {
    fireEvent.change(input, { target: { value: '51412' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 51465, validity false', () => {
    fireEvent.change(input, { target: { value: '514657128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51465, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 51465' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51465, validity true', () => {
    fireEvent.change(input, { target: { value: '51465' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 51471, validity false', () => {
    fireEvent.change(input, { target: { value: '514717128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51471, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 51471' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51471, validity true', () => {
    fireEvent.change(input, { target: { value: '51471' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 51539, validity false', () => {
    fireEvent.change(input, { target: { value: '515396128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51539, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 51539' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51539, validity true', () => {
    fireEvent.change(input, { target: { value: '51539' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 51571, validity false', () => {
    fireEvent.change(input, { target: { value: '515714128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51571, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 51571' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 51571, validity true', () => {
    fireEvent.change(input, { target: { value: '51571' } });
    expect(input.validity.valid).toBe(true);
  });
});
