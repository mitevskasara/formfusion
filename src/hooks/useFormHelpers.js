import { useContext, useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import FormContext from '../context';
import ACTIONS from '../state/actions';
import validateField from '../utils/validate';

const useFormHelpers = () => {
  const config = useContext(FormContext);

  const [localState, localDispatch] = useReducer(reducer, {
    ...initialState,
    values: config?.initialValues ?? {},
  });

  const state = config?.dispatch ? config.state : localState;
  const dispatch = config?.dispatch ?? localDispatch;

  function initValue(key) {
    dispatch({ type: ACTIONS.SET_VALUES, payload: { [key]: '' } });
  }

  function onValidate(e, customValidity) {
    validateField(e, customValidity, { errors: state.errors, dispatch });
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

  function resetForm() {
    if (Object.keys(state.values).length > 0) {
      dispatch({ type: ACTIONS.SET_VALUES, payload: {} });
      dispatch({ type: ACTIONS.SET_ERRORS, payload: {} });
      dispatch({ type: ACTIONS.SET_TOUCHED, payload: {} });
    }
  }

  return {
    ...config,
    ...state,
    initValue,
    onChange,
    onFocus,
    onValidate,
    resetForm,
  };
};

export default useFormHelpers;
