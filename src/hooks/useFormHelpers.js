import { useContext, useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import FormContext from '../context';
import ACTIONS from '../state/actions';
import maskInput from '../utils/mask';

const useFormHelpers = () => {
  const config = useContext(FormContext);

  const [state, dispatch] = config?.dispatch
    ? [config?.state, config?.dispatch]
    : useReducer(reducer, {
        ...initialState,
        values: config?.initialValues ?? {},
      });

  function initValue(key) {
    dispatch({ type: ACTIONS.SET_VALUES, payload: { [key]: '' } });
  }

  function onValidate(e, customValidity) {
    e.preventDefault();
    const { id, name, value, validity } = e.target;

    if (customValidity) {
      Object.keys(customValidity).map((key) => {
        if (validity[key]) {
          e.target.setCustomValidity(customValidity[key]);
        } else {
          e.target.setCustomValidity('');
        }
      });
    }

    if (typeof e.target.setAttribute === 'function') {
      e.target.setAttribute('aria-invalid', !Boolean(validity.valid));
    }

    if (!Boolean(validity.valid)) {
      e.target.setAttribute('aria-errormessage', `FormFusion-${id}-error`);
    } else {
      e.target.removeAttribute('aria-errormessage');
    }

    if (
      !e.target.validity.valid ||
      (e.target.validity.valid && state.errors[name])
    ) {
      dispatch({
        type: ACTIONS.SET_ERRORS,
        payload: {
          [name]: e.target.validity.valid ? '' : e.target.validationMessage,
        },
      });
    }

    const mask = e.target.dataset?.mask;

    if (mask) {
      e.target.value = maskInput(mask, value);
    }
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
