import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';

describe('Testing maskInput edge cases', () => {
  test('an all-# mask does not throw', () => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="m" name="m" mask="####" />
      </Form>
    );
    const input = screen.getByTestId('input');
    expect(() =>
      fireEvent.input(input, { target: { value: '12345' } })
    ).not.toThrow();
    expect(input.value).toBe('1234');
  });

  test('literal characters are treated as literals, not regex classes', () => {
    render(
      <Form onSubmit={() => {}}>
        <Input id="m" name="m" mask="+-##-]" />
      </Form>
    );
    const input = screen.getByTestId('input');
    expect(() =>
      fireEvent.input(input, { target: { value: 'ab12]+' } })
    ).not.toThrow();
  });
});
