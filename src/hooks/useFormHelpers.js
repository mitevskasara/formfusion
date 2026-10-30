import { useContext, useState } from 'react';
import reducer, { initialState } from '../state/reducer';
import createStore from '../state/store';
import FormContext from '../context';
import ACTIONS from '../state/actions';
import validateField from '../utils/validate';
import useStoreSelector from './useStoreSelector';

const useFormHelpers = (name) => {
  const config = useContext(FormContext);

  const [localStore] = useState(() => createStore(reducer, initialState));
  const store = config?.store ?? localStore;
  const { dispatch } = store;

  const value = useStoreSelector(store, (state) => state.values?.[name]);
  const error = useStoreSelector(store, (state) => state.errors?.[name]);

  function onValidate(e, customValidity) {
    validateField(e, customValidity, {
      errors: store.getState().errors,
      dispatch,
    });
  }

  function onChange(e) {
    const { name, value, checked } = e.target;
    dispatch({
      type: ACTIONS.SET_VALUES,
      payload: { [name]: checked ? Boolean(checked) : value },
    });
  }

  function onFocus(e) {
    dispatch({ type: ACTIONS.SET_TOUCHED, payload: { [e.target.name]: true } });
  }

  return {
    value,
    error,
    controlled: config?.controlled,
    validateOnChange: config?.validateOnChange,
    validateOnBlur: config?.validateOnBlur,
    onChange,
    onFocus,
    onValidate,
  };
};

export default useFormHelpers;
