import { useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import ACTIONS from '../state/actions';
import maskInput from '../utils/mask';

const useForm = (config) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    values: config?.initialValues,
  });

  function setFieldValue(key, value) {
    const formData = new FormData(config.formRef?.current);
    formData.append(key, value);
    dispatch({ type: ACTIONS.SET_VALUES, payload: { [key]: value } });
  }

  function resetForm() {
    config.formRef?.current?.reset();
    if (Object.keys(state.values).length > 0) {
      dispatch({ type: ACTIONS.SET_VALUES, payload: {} });
      dispatch({ type: ACTIONS.SET_ERRORS, payload: {} });
      dispatch({ type: ACTIONS.SET_TOUCHED, payload: {} });
    }
  }

  function onValidate(e, customValidity) {
    e.preventDefault();
    const { name, value, validity } = e.target;

    if (customValidity) {
      Object.keys(customValidity).map((key) => {
        if (validity[key]) {
          e.target.setCustomValidity(customValidity[key]);
        } else {
          e.target.setCustomValidity('');
        }
      });
    }

    e.target.setAttribute('aria-invalid', !Boolean(validity.valid));

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

    const mask = e.target.dataset.mask;

    if (mask) {
      e.target.value = maskInput(mask, value);
    }
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
  };
};

export default useForm;
