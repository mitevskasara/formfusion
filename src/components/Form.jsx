import React, { forwardRef, useMemo, useRef, useState } from 'react';
import FormContext from '../context';
import reducer, { initialState } from '../state/reducer';
import createStore from '../state/store';
import ACTIONS from '../state/actions';
import { resetValidity } from '../utils/validate';
import { getFormValues } from '../utils/helpers';

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

      const values = getFormValues(
        form,
        config ? store.getState().values : undefined
      );
      const submit =
        typeof config?.onSubmit === 'function' ? config.onSubmit : onSubmit;

      if (typeof submit === 'function') {
        submit(values);
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
