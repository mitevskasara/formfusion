import React, { useRef } from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';

const showError = (input) => {
  fireEvent.change(input, { target: { value: '!!!' } });
  fireEvent.blur(input);
};

describe('Reset', () => {
  test('restores initial values and clears errors, aria and custom validity', () => {
    const onReset = jest.fn();
    render(
      <Form
        onSubmit={() => {}}
        onReset={onReset}
        initialValues={{ user: 'jane' }}
      >
        <Input id="user" name="user" type="username" />
      </Form>
    );
    const input = screen.getByTestId('input');

    showError(input);
    act(() => screen.getByTestId('form').reset());

    expect(onReset).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('jane');
    expect(input).toHaveAttribute('aria-invalid', 'false');
    expect(input).not.toHaveAttribute('aria-errormessage');
    expect(input.validity.valid).toBe(true);
    expect(
      document.getElementById('FormFusion-user-error')
    ).toBeEmptyDOMElement();
  });

  test('resetForm from useForm restores initial values and clears errors', () => {
    let form;
    const Controlled = () => {
      const formRef = useRef(null);
      form = useForm({ formRef, initialValues: { user: 'jane' } });
      return (
        <Form config={form}>
          <Input id="user" name="user" type="username" />
        </Form>
      );
    };

    render(<Controlled />);
    const input = screen.getByTestId('input');

    showError(input);
    act(() => form.resetForm());

    expect(input).toHaveValue('jane');
    expect(form.values).toEqual({ user: 'jane' });
    expect(form.errors).toEqual({});
    expect(input.validity.valid).toBe(true);
  });
});
