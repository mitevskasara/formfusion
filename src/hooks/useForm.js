import { useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import ACTIONS from '../state/actions';
import maskInput from '../utils/mask';
import { CombineOperators } from '../utils/combine';

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
    const dataset = e.target.dataset || {};
    const setCustomValidity =
      typeof e.target.setCustomValidity === 'function'
        ? (message) => e.target.setCustomValidity(message)
        : () => {};

    let patterns = [];
    try {
      patterns = dataset.pattern ? JSON.parse(dataset.pattern) : [];
    } catch (_error) {
      patterns = [];
    }

    if (Array.isArray(patterns) && patterns.length > 0) {
      const operator = dataset.operator || CombineOperators.AND;

      const test = (pattern) => {
        try {
          return new RegExp(`^(?:${pattern})$`).test(value);
        } catch (_error) {
          return false;
        }
      };

      let matches;
      switch (operator) {
        case CombineOperators.OR:
          matches = patterns.some(test);
          break;
        case CombineOperators.NOR:
          matches = patterns.every((pattern) => !test(pattern));
          break;
        case CombineOperators.AND:
        default:
          matches = patterns.every(test);
          break;
      }

      if (!matches) {
        const message =
          customValidity?.patternMismatch ||
          customValidity?.invalid ||
          'Invalid field.';
        setCustomValidity(message);
        e.target.setAttribute('aria-invalid', 'true');
        e.target.setAttribute('aria-errormessage', `FormFusion-${name}-error`);
        dispatch({
          type: ACTIONS.SET_ERRORS,
          payload: { [name]: message },
        });
        return;
      }

      setCustomValidity('');
    }

    if (
      customValidity &&
      typeof customValidity === 'object' &&
      !patterns?.length
    ) {
      Object.keys(customValidity).map((key) => {
        if (validity?.[key]) {
          setCustomValidity(customValidity[key]);
        } else {
          setCustomValidity('');
        }
      });
    }

    e.target.setAttribute('aria-invalid', String(!Boolean(validity?.valid)));

    if (!validity?.valid || (validity?.valid && state.errors[name])) {
      dispatch({
        type: ACTIONS.SET_ERRORS,
        payload: {
          [name]: validity?.valid ? '' : e.target.validationMessage,
        },
      });
    }

    const mask = dataset.mask;

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
