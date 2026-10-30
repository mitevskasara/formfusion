import React from 'react';
import { renderToString } from 'react-dom/server';
import { render, act } from '@testing-library/react';
import createStore from '../../state/store';
import reducer, { initialState } from '../../state/reducer';
import ACTIONS from '../../state/actions';
import useStoreSelector, {
  useStoreSelectorFallback,
} from '../../hooks/useStoreSelector';
import Form from '../../components/Form';
import Input from '../../components/Input';

const setError = (payload) => ({ type: ACTIONS.SET_ERRORS, payload });

describe('createStore', () => {
  test('notifies subscribers only when the state changes', () => {
    const store = createStore(reducer, initialState);
    const listener = jest.fn();
    store.subscribe(listener);

    store.dispatch(setError({ name: 'Required' }));
    store.dispatch(setError({ name: 'Required' }));
    store.dispatch(setError({}));
    store.dispatch(setError({}));

    expect(listener).toHaveBeenCalledTimes(2);
  });
});

describe.each([
  ['useSyncExternalStore', useStoreSelector],
  ['React 16/17 fallback', useStoreSelectorFallback],
])('useStoreSelector (%s)', (_label, useSelector) => {
  test('re-renders only when the selected value changes', () => {
    const store = createStore(reducer, initialState);
    let renders = 0;
    let selected;

    const Field = () => {
      renders++;
      selected = useSelector(store, (state) => state.errors.first);
      return null;
    };

    render(<Field />);
    const mounted = renders;

    act(() => store.dispatch(setError({ second: 'Other field' })));
    expect(renders).toBe(mounted);

    act(() => store.dispatch(setError({ first: 'Required' })));
    expect(renders).toBe(mounted + 1);
    expect(selected).toBe('Required');
  });
});

test('renders on the server', () => {
  const html = renderToString(
    <Form onSubmit={() => {}} initialValues={{ user: 'jane' }}>
      <Input id="user" name="user" type="username" label="User" />
    </Form>
  );

  expect(html).toContain('value="jane"');
});
