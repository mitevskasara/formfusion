import React, { Profiler, useContext, useRef } from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import FormContext from '../../context';
import useForm from '../../hooks/useForm';

const createCounter = () => {
  const counts = {};
  const onRender = (id) => {
    counts[id] = (counts[id] || 0) + 1;
  };
  return { counts, onRender };
};

const ContextChangeProbe = React.memo(function ContextChangeProbe({
  onRender,
}) {
  useContext(FormContext);
  onRender('context');
  return null;
});

const renderForm = (counter, formProps = {}) =>
  render(
    <Form onSubmit={() => {}} {...formProps}>
      <ContextChangeProbe onRender={counter.onRender} />
      <Profiler id="first" onRender={counter.onRender}>
        <Input id="first" name="first" type="username" />
      </Profiler>
      <Profiler id="second" onRender={counter.onRender}>
        <Input id="second" name="second" type="username" />
      </Profiler>
      <Profiler id="notes" onRender={counter.onRender}>
        <Textarea id="notes" name="notes" required />
      </Profiler>
    </Form>
  );

const blurWith = (input, value) => {
  fireEvent.change(input, { target: { value } });
  fireEvent.blur(input);
};

describe('Field-level re-renders', () => {
  test('an error in one field re-renders only that field', () => {
    const counter = createCounter();
    renderForm(counter);
    const mounted = { ...counter.counts };

    blurWith(document.getElementById('first'), '!!!');

    expect(counter.counts.first).toBe(mounted.first + 1);
    expect(counter.counts.second).toBe(mounted.second);
    expect(counter.counts.notes).toBe(mounted.notes);
    expect(counter.counts.context).toBe(mounted.context);
  });

  test('repeating the same invalid value does not re-render the field', () => {
    const counter = createCounter();
    renderForm(counter);
    const input = document.getElementById('first');

    blurWith(input, '!!!');
    const afterFirstError = counter.counts.first;
    blurWith(input, '!!!');
    blurWith(input, '???');

    expect(counter.counts.first).toBe(afterFirstError);
  });

  test('a reset re-renders only the fields that had an error', () => {
    const counter = createCounter();
    renderForm(counter);

    blurWith(document.getElementById('first'), '!!!');
    const before = { ...counter.counts };
    act(() => screen.getByTestId('form').reset());

    expect(counter.counts.first).toBe(before.first + 1);
    expect(counter.counts.second).toBe(before.second);
    expect(counter.counts.notes).toBe(before.notes);
    expect(counter.counts.context).toBe(before.context);
  });

  test('config mode: a change re-renders only the changed field', () => {
    const counter = createCounter();
    let form;

    const Controlled = () => {
      const formRef = useRef(null);
      form = useForm({ formRef, initialValues: { first: '', second: '' } });
      return (
        <Form config={form}>
          <ContextChangeProbe onRender={counter.onRender} />
          <Profiler id="first" onRender={counter.onRender}>
            <Input id="first" name="first" type="username" />
          </Profiler>
          <Profiler id="second" onRender={counter.onRender}>
            <Input id="second" name="second" type="username" />
          </Profiler>
        </Form>
      );
    };

    render(<Controlled />);
    const input = document.getElementById('first');
    fireEvent.change(input, { target: { value: 'abc' } });

    expect(input).toHaveValue('abc');
    expect(form.values.first).toBe('abc');

    const contextRenders = counter.counts.context;
    act(() => form.setFieldValue('first', 'abcd'));
    expect(counter.counts.context).toBe(contextRenders);
    expect(input).toHaveValue('abcd');
  });
});

describe('Submit', () => {
  test('a fixed error in shared state does not block submit', () => {
    const onSubmit = jest.fn();
    render(
      <Form onSubmit={onSubmit}>
        <Input id="user" name="user" type="username" />
        <button type="submit">Submit</button>
      </Form>
    );
    const input = screen.getByTestId('input');

    blurWith(input, '!!!');
    blurWith(input, 'valid_user');
    fireEvent.submit(screen.getByTestId('form'));

    expect(onSubmit).toHaveBeenCalledWith({ user: 'valid_user' });
  });

  test('a noValidate form with an invalid field does not submit and shows the error', () => {
    const onSubmit = jest.fn();
    render(
      <Form onSubmit={onSubmit} noValidate>
        <Input id="user" name="user" type="username" required />
      </Form>
    );

    fireEvent.submit(screen.getByTestId('form'));

    const input = screen.getByTestId('input');
    expect(onSubmit).not.toHaveBeenCalled();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(
      document.getElementById(input.getAttribute('aria-errormessage'))
    ).not.toBeEmptyDOMElement();
  });
});
