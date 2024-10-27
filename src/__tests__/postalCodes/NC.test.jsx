import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with NC postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.nc} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.nc);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98826, validity false', () => {
    fireEvent.change(input, { target: { value: '988261128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98826, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98826' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98826, validity true', () => {
    fireEvent.change(input, { target: { value: '98826' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98816, validity false', () => {
    fireEvent.change(input, { target: { value: '988167128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98816, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98816' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98816, validity true', () => {
    fireEvent.change(input, { target: { value: '98816' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98870, validity false', () => {
    fireEvent.change(input, { target: { value: '988702128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98870, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98870' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98870, validity true', () => {
    fireEvent.change(input, { target: { value: '98870' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98880, validity false', () => {
    fireEvent.change(input, { target: { value: '988800128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98880, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98880' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98880, validity true', () => {
    fireEvent.change(input, { target: { value: '98880' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98820, validity false', () => {
    fireEvent.change(input, { target: { value: '988203128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98820, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98820' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98820, validity true', () => {
    fireEvent.change(input, { target: { value: '98820' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98811, validity false', () => {
    fireEvent.change(input, { target: { value: '988111128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98811, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98811' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98811, validity true', () => {
    fireEvent.change(input, { target: { value: '98811' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98860, validity false', () => {
    fireEvent.change(input, { target: { value: '988603128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98860, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98860' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98860, validity true', () => {
    fireEvent.change(input, { target: { value: '98860' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98821, validity false', () => {
    fireEvent.change(input, { target: { value: '988217128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98821, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98821' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98821, validity true', () => {
    fireEvent.change(input, { target: { value: '98821' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98823, validity false', () => {
    fireEvent.change(input, { target: { value: '988235128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98823, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98823' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98823, validity true', () => {
    fireEvent.change(input, { target: { value: '98823' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 98825, validity false', () => {
    fireEvent.change(input, { target: { value: '988257128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98825, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 98825' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 98825, validity true', () => {
    fireEvent.change(input, { target: { value: '98825' } });
    expect(input.validity.valid).toBe(true);
  });
});
