import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with TH postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-th" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.TH);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10230, validity false', () => {
    fireEvent.change(input, { target: { value: '102304128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10230, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 10230' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 10230, validity true', () => {
    fireEvent.change(input, { target: { value: '10230' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 16130, validity false', () => {
    fireEvent.change(input, { target: { value: '161304128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 16130, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 16130' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 16130, validity true', () => {
    fireEvent.change(input, { target: { value: '16130' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 17000, validity false', () => {
    fireEvent.change(input, { target: { value: '170007128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 17000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 17000, validity true', () => {
    fireEvent.change(input, { target: { value: '17000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 18150, validity false', () => {
    fireEvent.change(input, { target: { value: '181502128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 18150, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 18150' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 18150, validity true', () => {
    fireEvent.change(input, { target: { value: '18150' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22000, validity false', () => {
    fireEvent.change(input, { target: { value: '220001128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22000, validity true', () => {
    fireEvent.change(input, { target: { value: '22000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 22150, validity false', () => {
    fireEvent.change(input, { target: { value: '221507128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22150, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 22150' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 22150, validity true', () => {
    fireEvent.change(input, { target: { value: '22150' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 23120, validity false', () => {
    fireEvent.change(input, { target: { value: '231204128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 23120, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 23120' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 23120, validity true', () => {
    fireEvent.change(input, { target: { value: '23120' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 24000, validity false', () => {
    fireEvent.change(input, { target: { value: '240007128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 24000, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 24000' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 24000, validity true', () => {
    fireEvent.change(input, { target: { value: '24000' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 26120, validity false', () => {
    fireEvent.change(input, { target: { value: '261202128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 26120, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 26120' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 26120, validity true', () => {
    fireEvent.change(input, { target: { value: '26120' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 30250, validity false', () => {
    fireEvent.change(input, { target: { value: '302506128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30250, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 30250' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 30250, validity true', () => {
    fireEvent.change(input, { target: { value: '30250' } });
    expect(input.validity.valid).toBe(true);
  });
});
