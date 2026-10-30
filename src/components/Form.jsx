import React, { forwardRef, useMemo, useRef, useState } from 'react';
import FormContext from '../context';
import reducer, { initialState } from '../state/reducer';
import createStore from '../state/store';
import ACTIONS from '../state/actions';
import { resetValidity } from '../utils/validate';
import { parseEntries } from '../utils/helpers';

const Form = forwardRef(
  (
    {
      config,
      children,
      onSubmit,
      initialValues = {},
      validateOnChange = false,
      validateOnBlur = true,
      ...rest
    },
    ref
  ) => {
    const formRef = useRef(null);
    const [ownStore] = useState(() =>
      createStore(reducer, { ...initialState, values: initialValues })
    );
    const store = config?.store ?? ownStore;

    const contextFormRef = config?.formRef ?? formRef;
    const contextValidateOnChange =
      config?.validateOnChange ?? validateOnChange;
    const contextValidateOnBlur = config?.validateOnBlur ?? validateOnBlur;
    const controlled = Boolean(config);

    const contextValue = useMemo(
      () => ({
        store,
        formRef: contextFormRef,
        validateOnChange: contextValidateOnChange,
        validateOnBlur: contextValidateOnBlur,
        controlled,
      }),
      [
        store,
        contextFormRef,
        contextValidateOnChange,
        contextValidateOnBlur,
        controlled,
      ]
    );

    function handleSubmit(e) {
      e.preventDefault();

      const form = e.target;

      if (!form.checkValidity()) {
        return;
      }

      const formData = new FormData(form);
      const { values } = store.getState();

      if (config && Object.keys(values).length > 0) {
        Object.keys(values).forEach((key) => {
          switch (typeof values[key]) {
            case 'string': {
              formData.append(key, values[key]);
              break;
            }
            case 'object': {
              formData.append(key, JSON.stringify(values[key]));
              break;
            }
            default:
              formData.append(key, values[key]);
          }
        });
      }

      if (typeof config?.onSubmit === 'function') {
        config.onSubmit(parseEntries(Object.fromEntries(formData.entries())));
      } else if (typeof onSubmit === 'function') {
        onSubmit(parseEntries(Object.fromEntries(formData.entries())));
      }
    }

    function handleReset(e) {
      rest.onReset?.(e);
      resetValidity(e.currentTarget);
      store.dispatch({
        type: ACTIONS.RESET,
        payload: config ? config.initialValues : initialValues,
      });
    }

    return (
      <FormContext.Provider value={contextValue}>
        <form
          {...rest}
          data-testid="form"
          onSubmit={rest.action ? undefined : handleSubmit}
          onReset={handleReset}
          ref={config?.formRef ?? ref ?? formRef}
          className={`FormFusion ${rest?.className ?? ''}`}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

Form.displayName = 'Form';

export default Form;
