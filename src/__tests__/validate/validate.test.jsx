import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import validateField from '../../utils/validate';

describe('validateField', () => {
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

  test('shows the custom message of the failing check and keeps the type defaults', () => {
    render(
      <Form onSubmit={() => {}}>
        <Input
          id="user"
          name="user"
          type="username"
          required
          validation={{ valueMissing: 'Required' }}
        />
      </Form>
    );
    const input = screen.getByTestId('input');
    const error = document.getElementById('FormFusion-user-error');

    fireEvent.blur(input);
    expect(error).toHaveTextContent('Required');

    fireEvent.change(input, { target: { value: '!!!' } });
    fireEvent.blur(input);
    expect(error).toHaveTextContent('Please enter a valid username');

    fireEvent.change(input, { target: { value: 'valid_user' } });
    fireEvent.blur(input);
    expect(error).toBeEmptyDOMElement();
  });
});
