import React, { useMemo } from "react";
import useForm from "../../hooks/useForm";
import FormContext from "../../context";

const Form = React.memo(
  ({
    config,
    children,
    onSubmit,
    initialValues,
    validateOnChange = false,
    validateOnBlur = true,
    ...rest
  }) => {
    const configuration =
      config ||
      useForm({
        onSubmit,
        initialValues,
        validateOnChange,
        validateOnBlur,
      });

    const { formRef, handleSubmit } = configuration;

    const contextValue = useMemo(
      () => ({
        ...configuration,
        initialValues,
        validateOnChange: config?.validateOnChange || validateOnChange,
        validateOnBlur: config?.validateOnBlur || validateOnBlur,
        controlled: Boolean(config),
      }),
      [configuration, initialValues, validateOnChange, validateOnBlur],
    );

    return (
      <FormContext.Provider value={contextValue}>
        <form
          {...rest}
          onSubmit={rest.action ? undefined : handleSubmit}
          ref={formRef}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  },
);

export default Form;
