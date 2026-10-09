import { useContext, useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import FormContext from '../context';
import ACTIONS from '../state/actions';
import maskInput from '../utils/mask';
import { CombineOperators } from '../utils/combine';

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
    const { id, name, value } = e.target;
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
        case CombineOperators.OR: {
          matches = patterns.some(test);
          break;
        }
        case CombineOperators.NOR: {
          matches = patterns.every((pattern) => !test(pattern));
          break;
        }
        case CombineOperators.AND:
        default: {
          matches = patterns.every(test);
          break;
        }
      }

      if (!matches) {
        setCustomValidity(
          customValidity?.patternMismatch ||
            customValidity?.invalid ||
            'Invalid field.'
        );
      } else {
        setCustomValidity('');
      }
    }

    if (
      customValidity &&
      typeof customValidity === 'object' &&
      !patterns?.length
    ) {
      Object.keys(customValidity).map((key) => {
        if (e.target.validity?.[key]) {
          setCustomValidity(customValidity[key]);
        } else {
          setCustomValidity('');
        }
      });
    }

    if (typeof e.target.setAttribute === 'function') {
      e.target.setAttribute('aria-invalid', !Boolean(e.target.validity.valid));
    }

    if (!Boolean(e.target.validity.valid)) {
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
