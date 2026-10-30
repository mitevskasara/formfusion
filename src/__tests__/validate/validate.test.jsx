import React, { useRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import useForm from '../../hooks/useForm';
import useConnect from '../../utils/useConnect';
import validateField from '../../utils/validate';

const ConnectedInput = () => {
  const formRef = useRef(null);
  const form = useForm({ formRef });
  const inputProps = useConnect({ ...form, validateOnBlur: true }, 'username');

  return (
    <form ref={formRef}>
      <input name="username" data-testid="connected" {...inputProps} />
    </form>
  );
};

describe('validateField', () => {
  test('useForm links the error message by name when there is no id', () => {
    render(<ConnectedInput />);
    const input = screen.getByTestId('connected');

    fireEvent.change(input, { target: { value: '!!!' } });
    fireEvent.blur(input);
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute(
      'aria-errormessage',
      'FormFusion-username-error'
    );

    fireEvent.change(input, { target: { value: 'valid_user' } });
    fireEvent.blur(input);
    expect(input).toHaveAttribute('aria-invalid', 'false');
    expect(input).not.toHaveAttribute('aria-errormessage');
  });

  test('applies the mask even when combined patterns do not match', () => {
    const input = document.createElement('input');
    input.name = 'code';
    input.dataset.pattern = JSON.stringify(['^\\d+$']);
    input.dataset.mask = '##-##';
    input.value = '12ab';
    const dispatch = jest.fn();

    validateField(
      { target: input, preventDefault: () => {} },
      { patternMismatch: 'Digits only' },
      { errors: {}, dispatch }
    );

    expect(input.value).toBe('12-ab');
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_ERRORS',
      payload: { code: 'Digits only' },
    });
  });
});
