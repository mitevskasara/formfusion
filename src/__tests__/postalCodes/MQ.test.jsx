import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '@formfusion/postcodes';

describe('Testing validity with MQ postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="field" name="field" type={postalCodes.mq} required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.mq);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97213, validity false', () => {
    fireEvent.change(input, { target: { value: '972135128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97213, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97213' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97213, validity true', () => {
    fireEvent.change(input, { target: { value: '97213' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97261 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97261 CEDEX3128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97261 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97261 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97261 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97261 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97257 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97257 CEDEX1128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97257 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97257 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97257 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97257 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97276 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97276 CEDEX5128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97276 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97276 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97276 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97276 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97281 CEDEX 1, validity false', () => {
    fireEvent.change(input, { target: { value: '97281 CEDEX 11128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97281 CEDEX 1, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97281 CEDEX 1' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97281 CEDEX 1, validity true', () => {
    fireEvent.change(input, { target: { value: '97281 CEDEX 1' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97292 CEDEX 2, validity false', () => {
    fireEvent.change(input, { target: { value: '97292 CEDEX 24128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97292 CEDEX 2, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97292 CEDEX 2' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97292 CEDEX 2, validity true', () => {
    fireEvent.change(input, { target: { value: '97292 CEDEX 2' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97205 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97205 CEDEX5128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97205 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97205 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97205 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97205 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97240, validity false', () => {
    fireEvent.change(input, { target: { value: '972402128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97240, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97240' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97240, validity true', () => {
    fireEvent.change(input, { target: { value: '97240' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97254 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: '97254 CEDEX3128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97254 CEDEX, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97254 CEDEX' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97254 CEDEX, validity true', () => {
    fireEvent.change(input, { target: { value: '97254 CEDEX' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 97233, validity false', () => {
    fireEvent.change(input, { target: { value: '972338128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97233, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 97233' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 97233, validity true', () => {
    fireEvent.change(input, { target: { value: '97233' } });
    expect(input.validity.valid).toBe(true);
  });
});
