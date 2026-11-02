import { useReducer, useRef, useState } from 'react';
import reducer, { initialState } from '../state/reducer';
import createStore from '../state/store';
import ACTIONS from '../state/actions';
import validateField, { resetValidity } from '../utils/validate';
import { useIsomorphicLayoutEffect } from './useStoreSelector';

const slices = ['values', 'errors', 'touched'];

function useTrackedState(store) {
  const [, forceRender] = useReducer((count) => count + 1, 0);
  const tracked = {};
  const state = store.getState();
  const latest = useRef({ read: {}, state });

  const checkForUpdates = () => {
    const { read, state } = latest.current;
    const next = store.getState();
    if (slices.some((slice) => read[slice] && state[slice] !== next[slice]))
      forceRender();
  };

  useIsomorphicLayoutEffect(() => {
    latest.current = { read: { ...tracked }, state };
    checkForUpdates();
  });

  useIsomorphicLayoutEffect(() => store.subscribe(checkForUpdates), [store]);

  return tracked;
}

const useForm = (config) => {
  const [store] = useState(() =>
    createStore(reducer, {
      ...initialState,
      values: config?.initialValues ?? {},
    })
  );
  const { dispatch } = store;
  const tracked = useTrackedState(store);

  function setFieldValue(key, value) {
    dispatch({ type: ACTIONS.SET_VALUES, payload: { [key]: value } });
  }

  function resetForm() {
    const form = config?.formRef?.current;
    form?.reset();
    resetValidity(form);
    dispatch({ type: ACTIONS.RESET, payload: config?.initialValues });
  }

  function onValidate(e, customValidity) {
    validateField(e, customValidity, {
      errors: store.getState().errors,
      dispatch,
    });
  }

  const form = {
    ...config,
    formRef: config.formRef,
    setFieldValue,
    resetForm,
    dispatch,
    onValidate,
    store,
  };

  slices.forEach((slice) => {
    Object.defineProperty(form, slice, {
      get() {
        tracked[slice] = true;
        return store.getState()[slice];
      },
    });
  });
  Object.defineProperty(form, 'state', {
    get() {
      slices.forEach((slice) => (tracked[slice] = true));
      return store.getState();
    },
  });

  return form;
};

export default useForm;
