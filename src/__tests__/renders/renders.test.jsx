import React, { Profiler, useContext, useRef } from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import FormContext from '../../context';
import useForm from '../../hooks/useForm';
import useFormState from '../../hooks/useFormState';

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

  test('typing or repeating the same invalid value does not re-render the field', () => {
    const counter = createCounter();
    renderForm(counter);
    const input = document.getElementById('first');

    blurWith(input, '!!!');
    const afterFirstError = counter.counts.first;
    blurWith(input, '!!!');
    blurWith(input, '???');
    fireEvent.input(input, { target: { value: 'valid_user' } });

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
      counter.onRender('form');
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
    const mounted = { ...counter.counts };

    fireEvent.change(input, { target: { value: 'abc' } });
    blurWith(input, '!!!');
    act(() => form.setFieldValue('first', `${form.values.first}d`));

    expect(input).toHaveValue('!!!d');
    expect(counter.counts.form).toBe(mounted.form);
    expect(counter.counts.first).toBe(mounted.first + 4);
    expect(counter.counts.second).toBe(mounted.second);
    expect(counter.counts.context).toBe(mounted.context);
  });

  test('config mode: reading form.errors in render keeps the error up to date', () => {
    let form;

    const Controlled = () => {
      const formRef = useRef(null);
      form = useForm({ formRef, initialValues: { first: '' } });
      return (
        <Form config={form}>
          <Input id="first" name="first" type="username" />
          <output data-testid="first-error">{form.errors.first}</output>
        </Form>
      );
    };

    render(<Controlled />);
    blurWith(document.getElementById('first'), '!!!');

    expect(screen.getByTestId('first-error')).not.toBeEmptyDOMElement();
  });

  test('useFormState re-renders only when the selected value changes', () => {
    const counter = createCounter();
    let form;

    const Mirror = () => {
      const first = useFormState(form, (state) => state.values.first);
      return (
        <Profiler id="mirror" onRender={counter.onRender}>
          <output data-testid="mirror">{first}</output>
        </Profiler>
      );
    };

    const Controlled = () => {
      const formRef = useRef(null);
      form = useForm({ formRef, initialValues: { first: '', second: '' } });
      return (
        <Form config={form}>
          <Input id="first" name="first" type="username" />
          <Input id="second" name="second" type="username" />
          <Mirror />
        </Form>
      );
    };

    render(<Controlled />);
    const mounted = counter.counts.mirror;

    fireEvent.change(document.getElementById('second'), {
      target: { value: 'other' },
    });
    expect(counter.counts.mirror).toBe(mounted);

    fireEvent.change(document.getElementById('first'), {
      target: { value: 'abc' },
    });
    expect(counter.counts.mirror).toBe(mounted + 1);
    expect(screen.getByTestId('mirror')).toHaveTextContent('abc');
  });
});

describe('Submit', () => {
  test('submits on the first try after fixing an error without leaving the field', () => {
    const onSubmit = jest.fn();
    render(
      <Form onSubmit={onSubmit}>
        <Input id="user" name="user" type="username" />
        <button type="submit">Submit</button>
      </Form>
    );
    const input = screen.getByTestId('input');

    blurWith(input, '!!!');
    fireEvent.input(input, { target: { value: 'valid_user' } });
    act(() => screen.getByTestId('form').requestSubmit());

    expect(onSubmit).toHaveBeenCalledWith({ user: 'valid_user' });
  });

  test('submits values as entered and repeated names as arrays', () => {
    const onSubmit = jest.fn();
    render(
      <Form onSubmit={onSubmit}>
        <input name="zip" defaultValue="10115" />
        <input name="flag" defaultValue="true" />
        <input type="checkbox" name="tags" value="a" defaultChecked />
        <input type="checkbox" name="tags" value="b" defaultChecked />
      </Form>
    );

    act(() => screen.getByTestId('form').requestSubmit());

    expect(onSubmit).toHaveBeenCalledWith({
      zip: '10115',
      flag: 'true',
      tags: ['a', 'b'],
    });
  });

  test('config mode submits store values with their types', () => {
    const onSubmit = jest.fn();
    let form;
    const Controlled = () => {
      const formRef = useRef(null);
      form = useForm({ formRef, initialValues: { zip: '10115' }, onSubmit });
      return (
        <Form config={form}>
          <Input id="zip" name="zip" type="numeric" />
        </Form>
      );
    };

    render(<Controlled />);
    act(() => form.setFieldValue('meta', { id: 1 }));
    act(() => screen.getByTestId('form').requestSubmit());

    expect(onSubmit).toHaveBeenCalledWith({ zip: '10115', meta: { id: 1 } });
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
