import React, { useRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import useForm from '../../hooks/useForm';
import useConnect from '../../utils/useConnect';
import patterns from '../../constants/regex';
import combine from '../../utils/combine';
import rules from '../../constants/patterns';

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
    expect(onValidate.mock.calls[0][1]).toMatchObject(validation);
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

  test('supports combine() patterns and masks', () => {
    const Harness = () => {
      const form = useForm({ formRef: { current: null } });
      const config = { ...form, validateOnBlur: true };
      return (
        <>
          <input
            data-testid="pin"
            {...useConnect(
              config,
              combine.and(rules.numeric, rules.length(4)),
              undefined,
              { name: 'pin' }
            )}
          />
          <input
            data-testid="date"
            {...useConnect(config, 'text', undefined, {
              name: 'date',
              mask: '##-##',
            })}
          />
        </>
      );
    };

    render(<Harness />);
    const pin = screen.getByTestId('pin');
    const date = screen.getByTestId('date');

    fireEvent.change(pin, { target: { value: '12a' } });
    fireEvent.blur(pin);
    expect(pin).toHaveAttribute('aria-invalid', 'true');

    fireEvent.input(date, { target: { value: '1234' } });
    expect(date).toHaveValue('12-34');
    expect(date).not.toHaveAttribute('mask');
  });

  test('requires a name', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const Unnamed = () => <input {...useConnect(useForm({}), 'email')} />;

    expect(() => render(<Unnamed />)).toThrow('useConnect requires props.name');
    console.error.mockRestore();
  });
});
