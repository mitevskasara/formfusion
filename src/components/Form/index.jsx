import React from "react";
import useForm from "../../hooks/useForm";
import FormContext from "../../context";

const Form = ({
  config,
  children,
  onSubmit,
  initialValues,
  validateOnChange = false,
  validateOnBlur = true,
  ...rest
}) => {
  const configuration = config
    ? config
    : useForm({
        onSubmit,
        initialValues,
        validateOnChange,
        validateOnBlur,
      });
  const { formRef, handleSubmit } = configuration;

  return (
    <FormContext.Provider
      value={{
        ...configuration,
        initialValues,
        validateOnChange: config?.validateOnChange || validateOnChange,
        validateOnBlur: config?.validateOnBlur || validateOnBlur,
        controlled: config ? true : false,
      }}
    >
      <form {...rest} onSubmit={handleSubmit} ref={formRef}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
