import { useState } from 'react';
import reducer, { initialState } from '../state/reducer';
import createStore from '../state/store';
import ACTIONS from '../state/actions';
import validateField from '../utils/validate';
import useStoreSelector from './useStoreSelector';

const selectState = (state) => state;

const useForm = (config) => {
  const [store] = useState(() =>
    createStore(reducer, {
      ...initialState,
      values: config?.initialValues ?? {},
    })
  );
  const { dispatch } = store;
  const state = useStoreSelector(store, selectState);

  function setFieldValue(key, value) {
    dispatch({ type: ACTIONS.SET_VALUES, payload: { [key]: value } });
  }

  function resetForm() {
    config.formRef?.current?.reset();
    if (Object.keys(store.getState().values).length > 0) {
      dispatch({ type: ACTIONS.SET_VALUES, payload: {} });
      dispatch({ type: ACTIONS.SET_ERRORS, payload: {} });
      dispatch({ type: ACTIONS.SET_TOUCHED, payload: {} });
    }
  }

  function onValidate(e, customValidity) {
    validateField(e, customValidity, {
      errors: store.getState().errors,
      dispatch,
    });
  }

  return {
    ...state,
    ...config,
    formRef: config.formRef,
    setFieldValue,
    resetForm,
    state,
    dispatch,
    onValidate,
    store,
  };
};

export default useForm;
