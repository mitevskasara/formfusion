import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import postalCodes from '../../constants/data/postalCodes';

describe('Testing validity with CO postal codes', () => {
  let input;

  beforeAll(() => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="tel" name="tel" type="postal-code-co" required={true} />
      </Form>
    );
    input = screen.getByTestId('input');
  });

  test('Testing correct pattern', () => {
    expect(input.getAttribute('pattern')).toBe(postalCodes.CO);
  });

  test('Testing code: 6!26325HDgs, validity false', () => {
    fireEvent.change(input, { target: { value: '6!26325HDgs' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 917010, validity false', () => {
    fireEvent.change(input, { target: { value: '9170100128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 917010, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 917010' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 917010, validity true', () => {
    fireEvent.change(input, { target: { value: '917010' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 916017, validity false', () => {
    fireEvent.change(input, { target: { value: '9160170128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 916017, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 916017' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 916017, validity true', () => {
    fireEvent.change(input, { target: { value: '916017' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 916058, validity false', () => {
    fireEvent.change(input, { target: { value: '9160581128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 916058, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 916058' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 916058, validity true', () => {
    fireEvent.change(input, { target: { value: '916058' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 912017, validity false', () => {
    fireEvent.change(input, { target: { value: '9120171128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 912017, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 912017' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 912017, validity true', () => {
    fireEvent.change(input, { target: { value: '912017' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 911030, validity false', () => {
    fireEvent.change(input, { target: { value: '9110305128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 911030, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 911030' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 911030, validity true', () => {
    fireEvent.change(input, { target: { value: '911030' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 057828, validity false', () => {
    fireEvent.change(input, { target: { value: '0578285128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 057828, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 057828' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 057828, validity true', () => {
    fireEvent.change(input, { target: { value: '057828' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 054838, validity false', () => {
    fireEvent.change(input, { target: { value: '0548380128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 054838, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 054838' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 054838, validity true', () => {
    fireEvent.change(input, { target: { value: '054838' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 057030, validity false', () => {
    fireEvent.change(input, { target: { value: '0570301128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 057030, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 057030' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 057030, validity true', () => {
    fireEvent.change(input, { target: { value: '057030' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 055411, validity false', () => {
    fireEvent.change(input, { target: { value: '0554111128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 055411, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 055411' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 055411, validity true', () => {
    fireEvent.change(input, { target: { value: '055411' } });
    expect(input.validity.valid).toBe(true);
  });

  test('Testing code: 057420, validity false', () => {
    fireEvent.change(input, { target: { value: '0574201128998' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 057420, validity false', () => {
    fireEvent.change(input, { target: { value: 'AQ 057420' } });
    expect(input.validity.valid).toBe(false);
  });

  test('Testing code: 057420, validity true', () => {
    fireEvent.change(input, { target: { value: '057420' } });
    expect(input.validity.valid).toBe(true);
  });
});
