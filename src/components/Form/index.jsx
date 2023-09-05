import React from "react";
import useForm from "../../hooks/useForm";
import FormContext from "../../context";

const Form = ({
  children,
  onSubmit,
  initialValues,
  validateOnChange = false,
  validateOnBlur = true,
  ...rest
}) => {
  const config = useForm({
    onSubmit,
    initialValues,
    validateOnChange,
    validateOnBlur
  });
  const { formRef, handleSubmit } = config;

  return (
    <FormContext.Provider
      value={{
        ...config,
        initialValues,
        validateOnChange,
        validateOnBlur
      }}
    >
      <form {...rest} onSubmit={handleSubmit} ref={formRef}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
