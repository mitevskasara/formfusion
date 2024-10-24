import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with SG postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-sg" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.SG);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768187, validity false', () => {
    fireEvent.change(input, { target: { value: '7681872128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768187, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 768187' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768187, validity true', () => {
    fireEvent.change(input, { target: { value: '768187' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 768315, validity false', () => {
    fireEvent.change(input, { target: { value: '7683151128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768315, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 768315' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768315, validity true', () => {
    fireEvent.change(input, { target: { value: '768315' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 768446, validity false', () => {
    fireEvent.change(input, { target: { value: '7684465128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768446, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 768446' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768446, validity true', () => {
    fireEvent.change(input, { target: { value: '768446' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 768450, validity false', () => {
    fireEvent.change(input, { target: { value: '7684500128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768450, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 768450' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768450, validity true', () => {
    fireEvent.change(input, { target: { value: '768450' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 768680, validity false', () => {
    fireEvent.change(input, { target: { value: '7686808128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768680, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 768680' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768680, validity true', () => {
    fireEvent.change(input, { target: { value: '768680' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 768759, validity false', () => {
    fireEvent.change(input, { target: { value: '7687591128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768759, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 768759' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 768759, validity true', () => {
    fireEvent.change(input, { target: { value: '768759' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 769367, validity false', () => {
    fireEvent.change(input, { target: { value: '7693670128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 769367, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 769367' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 769367, validity true', () => {
    fireEvent.change(input, { target: { value: '769367' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 769461, validity false', () => {
    fireEvent.change(input, { target: { value: '7694614128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 769461, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 769461' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 769461, validity true', () => {
    fireEvent.change(input, { target: { value: '769461' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 769515, validity false', () => {
    fireEvent.change(input, { target: { value: '7695155128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 769515, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 769515' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 769515, validity true', () => {
    fireEvent.change(input, { target: { value: '769515' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 769645, validity false', () => {
    fireEvent.change(input, { target: { value: '7696450128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 769645, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 769645' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 769645, validity true', () => {
    fireEvent.change(input, { target: { value: '769645' } });
    expect(input.validity.valid).toBe(true);
  });
});
