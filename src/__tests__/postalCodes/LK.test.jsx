import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with LK postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.lk} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.lk);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20032, validity false', () => {
    fireEvent.change(input, { target: { value: '200321128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20032, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20032' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20032, validity true', () => {
    fireEvent.change(input, { target: { value: '20032' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 20094, validity false', () => {
    fireEvent.change(input, { target: { value: '200945128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20094, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20094' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20094, validity true', () => {
    fireEvent.change(input, { target: { value: '20094' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 20200, validity false', () => {
    fireEvent.change(input, { target: { value: '202001128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20200, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20200' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20200, validity true', () => {
    fireEvent.change(input, { target: { value: '20200' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 20580, validity false', () => {
    fireEvent.change(input, { target: { value: '205805128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20580, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20580' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20580, validity true', () => {
    fireEvent.change(input, { target: { value: '20580' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 20666, validity false', () => {
    fireEvent.change(input, { target: { value: '206664128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20666, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20666' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20666, validity true', () => {
    fireEvent.change(input, { target: { value: '20666' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 20738, validity false', () => {
    fireEvent.change(input, { target: { value: '207380128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20738, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20738' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20738, validity true', () => {
    fireEvent.change(input, { target: { value: '20738' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 20967, validity false', () => {
    fireEvent.change(input, { target: { value: '209674128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20967, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20967' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20967, validity true', () => {
    fireEvent.change(input, { target: { value: '20967' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 21094, validity false', () => {
    fireEvent.change(input, { target: { value: '210946128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 21094, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 21094' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 21094, validity true', () => {
    fireEvent.change(input, { target: { value: '21094' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 21206, validity false', () => {
    fireEvent.change(input, { target: { value: '212067128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 21206, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 21206' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 21206, validity true', () => {
    fireEvent.change(input, { target: { value: '21206' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 20568, validity false', () => {
    fireEvent.change(input, { target: { value: '205688128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20568, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 20568' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 20568, validity true', () => {
    fireEvent.change(input, { target: { value: '20568' } });
    expect(input.validity.valid).toBe(true);
  });
});
