import React, { useRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';

describe('Checkbox', () => {
  test('config mode: checking and unchecking updates the state', () => {
    let form;
    const Controlled = () => {
      const formRef = useRef(null);
      form = useForm({ formRef, initialValues: { agree: false } });
      return (
        <Form config={form}>
          <Input id="agree" name="agree" type="checkbox" label="Agree" />
        </Form>
      );
    };

    render(<Controlled />);
    const checkbox = screen.getByTestId('input');

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(form.values.agree).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(form.values.agree).toBe(false);
  });

  test('initialValues checks the box', () => {
    render(
      <Form onSubmit={() => {}} initialValues={{ agree: true }}>
        <Input id="agree" name="agree" type="checkbox" label="Agree" />
      </Form>
    );

    expect(screen.getByTestId('input')).toBeChecked();
  });
});
