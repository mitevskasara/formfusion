import React, { useRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import useForm from '../../hooks/useForm';

describe.each([
  ['Input', Input],
  ['Textarea', Textarea],
])('%s', (_name, Field) => {
  test('runs the user handlers after the form handlers', () => {
    let form;
    const onChange = jest.fn(() => form.values.bio);
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const Controlled = () => {
      const formRef = useRef(null);
      form = useForm({ formRef, initialValues: { bio: '' } });
      return (
        <Form config={form}>
          <Field
            id="bio"
            name="bio"
            label="Bio"
            required
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </Form>
      );
    };

    render(<Controlled />);
    const field = screen.getByLabelText('Bio');

    fireEvent.focus(field);
    fireEvent.change(field, { target: { value: 'hello' } });
    fireEvent.change(field, { target: { value: '' } });
    fireEvent.blur(field);

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveReturnedWith('hello');
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(field).toHaveAttribute('aria-invalid', 'true');
  });

  test('config mode: shows a value of 0 from the state', () => {
    const Controlled = () => {
      const formRef = useRef(null);
      const form = useForm({ formRef, initialValues: { count: 0 } });
      return (
        <Form config={form}>
          <Field id="count" name="count" label="Count" />
        </Form>
      );
    };

    render(<Controlled />);
    expect(screen.getByLabelText('Count').value).toBe('0');
  });
});
