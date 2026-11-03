import React, { useRef } from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';

const Colors = () => (
  <>
    <Input id="red" name="color" type="radio" value="red" label="Red" />
    <Input id="blue" name="color" type="radio" value="blue" label="Blue" />
  </>
);

describe('Radio', () => {
  test('config mode: choosing an option stores its value', () => {
    let form;
    const Controlled = () => {
      const formRef = useRef(null);
      form = useForm({ formRef, initialValues: { color: 'red' } });
      return (
        <Form config={form}>
          <Colors />
        </Form>
      );
    };

    render(<Controlled />);
    const red = screen.getByLabelText('Red');
    const blue = screen.getByLabelText('Blue');
    expect(red).toBeChecked();

    fireEvent.click(blue);
    expect(form.values.color).toBe('blue');
    expect(blue).toBeChecked();
    expect(red).not.toBeChecked();
    expect(red).toHaveAttribute('value', 'red');
  });

  test('initialValues checks the option and submit sends its value', () => {
    const onSubmit = jest.fn();
    render(
      <Form onSubmit={onSubmit} initialValues={{ color: 'blue' }}>
        <Colors />
      </Form>
    );

    expect(screen.getByLabelText('Blue')).toBeChecked();
    fireEvent.click(screen.getByLabelText('Red'));
    act(() => screen.getByTestId('form').requestSubmit());

    expect(onSubmit).toHaveBeenCalledWith({ color: 'red' });
  });
});
