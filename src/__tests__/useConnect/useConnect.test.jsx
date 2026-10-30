import React, { useRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import useForm from '../../hooks/useForm';
import useConnect from '../../utils/useConnect';
import { connect, useConnect as exportedUseConnect } from '../../index';
import patterns from '../../constants/regex';

const validation = { patternMismatch: 'Please enter a valid email.' };

const ConnectedInput = ({ onValidate, type = 'email', ...overrides }) => {
  const formRef = useRef(null);
  const form = useForm({ formRef });
  const inputProps = useConnect(
    {
      ...form,
      onValidate: onValidate ?? form.onValidate,
      validateOnChange: true,
      validateOnBlur: true,
      ...overrides,
    },
    type,
    validation,
    { name: 'email' }
  );

  return (
    <form ref={formRef}>
      <input data-testid="email" {...inputProps} />
      <span id="FormFusion-email-error">{form.errors.email}</span>
    </form>
  );
};

describe('useConnect', () => {
  test('resolves type, pattern, and data-type from a named type', () => {
    render(<ConnectedInput type="username" />);
    const input = screen.getByTestId('email');

    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('pattern', patterns.USERNAME);
    expect(input).toHaveAttribute('data-type', 'username');
  });

  test('uses the native type and no pattern for native inputs', () => {
    render(<ConnectedInput />);
    const input = screen.getByTestId('email');

    expect(input).toHaveAttribute('type', 'email');
    expect(input).not.toHaveAttribute('pattern');
  });

  test('passes the resolved validation to onValidate', () => {
    const onValidate = jest.fn();
    render(<ConnectedInput onValidate={onValidate} />);

    fireEvent.input(screen.getByTestId('email'), {
      target: { value: 'user@example.com' },
    });

    expect(onValidate).toHaveBeenCalledTimes(1);
    expect(onValidate.mock.calls[0][1]).toBe(validation);
  });

  test('skips change and blur handlers when validation is disabled', () => {
    const onValidate = jest.fn();
    render(
      <ConnectedInput
        onValidate={onValidate}
        validateOnChange={false}
        validateOnBlur={false}
      />
    );
    const input = screen.getByTestId('email');

    fireEvent.input(input, { target: { value: 'user@example.com' } });
    fireEvent.blur(input);

    expect(onValidate).not.toHaveBeenCalled();
  });

  test('calls onChange only when controlled', () => {
    const onChange = jest.fn();
    const { unmount } = render(<ConnectedInput onChange={onChange} />);

    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'user@example.com' },
    });
    expect(onChange).not.toHaveBeenCalled();

    unmount();

    render(<ConnectedInput onChange={onChange} controlled />);
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'user@example.com' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('merges extra props and lets them override the pattern', () => {
    const Harness = () => {
      const inputProps = useConnect(
        useForm({ formRef: { current: null } }),
        'username',
        undefined,
        { name: 'username', placeholder: 'Enter username', pattern: '^[a-z]+$' }
      );
      return <input data-testid="username" {...inputProps} />;
    };

    render(<Harness />);
    const input = screen.getByTestId('username');

    expect(input).toHaveAttribute('placeholder', 'Enter username');
    expect(input).toHaveAttribute('pattern', '^[a-z]+$');
  });

  test('renders aria-invalid and aria-errormessage from the error state', () => {
    render(<ConnectedInput type="username" />);
    const input = screen.getByTestId('email');

    fireEvent.input(input, { target: { value: '!!!' } });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(
      document.getElementById(input.getAttribute('aria-errormessage'))
    ).toHaveTextContent('Please enter a valid email.');

    fireEvent.input(input, { target: { value: 'valid_user' } });
    expect(input).toHaveAttribute('aria-invalid', 'false');
    expect(input).not.toHaveAttribute('aria-errormessage');
  });

  test('requires a name', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const Unnamed = () => <input {...useConnect(useForm({}), 'email')} />;

    expect(() => render(<Unnamed />)).toThrow('useConnect requires props.name');
    console.error.mockRestore();
  });

  test('keeps connect as a deprecated alias', () => {
    expect(connect).toBe(exportedUseConnect);
  });
});
