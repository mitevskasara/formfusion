import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../../components/Form';
import Select from '../../components/Select';

describe('Testing Select component', () => {
  test('selecting an option does not throw for a required field', () => {
    const onSubmit = jest.fn();
    render(
      <Form onSubmit={onSubmit}>
        <Select
          id="sel"
          name="sel"
          required
          label="Pick an option"
          options={[
            { value: 'a', label: 'Option A' },
            { value: 'b', label: 'Option B' },
          ]}
        />
      </Form>
    );

    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(screen.getByRole('option', { name: 'Option A' }));

    expect(screen.getByRole('combobox')).toHaveTextContent('Option A');

    const hiddenInput = screen.getByDisplayValue('a');
    expect(hiddenInput).toHaveAttribute('name', 'sel');
  });

  test('selecting an option for a required field sets a valid state', () => {
    render(
      <Form onSubmit={() => {}}>
        <Select
          id="sel"
          name="sel"
          required
          label="Pick an option"
          options={[{ value: 'a', label: 'Option A' }]}
        />
      </Form>
    );

    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(screen.getByRole('option', { name: 'Option A' }));

    const hiddenInput = screen.getByDisplayValue('a');
    expect(hiddenInput.validity.valid).toBe(true);
  });

  test('combobox is labelled and lists id are unique per instance', () => {
    render(
      <Form onSubmit={() => {}}>
        <Select
          id="one"
          name="one"
          label="First"
          options={[{ value: 'a', label: 'A' }]}
        />
        <Select
          id="two"
          name="two"
          label="Second"
          options={[{ value: 'a', label: 'A' }]}
        />
      </Form>
    );

    const combos = screen.getAllByRole('combobox');
    expect(combos[0]).toHaveAttribute('aria-labelledby', 'one-label');
    expect(combos[1]).toHaveAttribute('aria-labelledby', 'two-label');

    fireEvent.click(combos[0]);
    expect(screen.getByRole('listbox')).toHaveAttribute('id', 'one-list');
  });

  test('falls back to the name prop when id is not provided', () => {
    render(
      <Form onSubmit={() => {}}>
        <Select
          name="country"
          label="Country"
          options={[{ value: 'a', label: 'A' }]}
        />
      </Form>
    );

    const combo = screen.getByRole('combobox');
    expect(combo).toHaveAttribute('id', 'country');
    expect(combo).toHaveAttribute('aria-labelledby', 'country-label');
    expect(screen.getByLabelText('Country')).toBe(combo);
  });
});
