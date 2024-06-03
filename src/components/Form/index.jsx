import React, { forwardRef, useEffect, useRef } from "react";
import FormContext from "../../context";
import { parseEntries } from "../../utils/helpers";
import useFormHelpers from "../../hooks/useFormHelpers";

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
    ref,
  ) => {
    const formRef = useRef(null);
    const { values, errors, resetForm } = config?.values
      ? { values: config.values, errors: config.errors, resetForm }
      : useFormHelpers();

    function handleSubmit(e) {
      e.preventDefault();
      if (Object.keys(errors).filter((key) => errors[key]).length) {
        e.preventDefault();
      }
      const form = e.target;
      const formData = new FormData(form);
      if (config && Object.keys(values).length > 0) {
        Object.keys(values).forEach((key) => {
          switch (typeof values[key]) {
            case "string": {
              formData.append(key, values[key]);
              break;
            }
            case "object": {
              formData.append(key, JSON.stringify(values[key]));
              break;
            }
            default:
              formData.append(key, values[key]);
          }
        });
      }

      if (typeof config?.onSubmit === "function") {
        config.onSubmit(parseEntries(Object.fromEntries(formData.entries())));
      } else if (typeof onSubmit === "function") {
        onSubmit(parseEntries(Object.fromEntries(formData.entries())));
      }
    }

    useEffect(() => {
      const form = ref?.current;

      const handleFormReset = () => {
        if (typeof resetForm === "function") {
          resetForm();
        }
      };

      if (form) {
        form.addEventListener("reset", handleFormReset);
      }

      return () => {
        if (form) {
          form.removeEventListener("reset", handleFormReset);
        }
      };
    }, [ref?.current, resetForm]);

    return (
      <FormContext.Provider
        value={{
          ...config,
          formRef: config?.formRef ?? formRef,
          initialValues: config?.values ?? initialValues,
          validateOnChange: config?.validateOnChange ?? validateOnChange,
          validateOnBlur: config?.validateOnBlur ?? validateOnBlur,
          controlled: Boolean(config),
        }}
      >
        <form
          {...rest}
          onSubmit={rest.action ? undefined : handleSubmit}
          ref={config?.formRef ?? ref ?? formRef}
          className={`FormFusion ${rest?.className ?? ''}`}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  },
);

export default Form;
