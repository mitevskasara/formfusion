import { useState, useRef } from "react";

const useForm = (config) => {
  const formRef = useRef(null);
  const [values, setValues] = useState(config.initialValues || {});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  function handleSetValues(key, value) {
    const formData = new FormData(formRef.current);
    formData.append(key, value);

    setValues((prevData) => ({
      ...prevData,
      [key]: value
    }));
  };

  function onValidate(e, customValidity) {
    e.preventDefault();
    const { name, validity } = e.target;

    if (customValidity) {
      Object.keys(customValidity).map((key) => {
        if (validity[key]) {
          e.target.setCustomValidity(customValidity[key]);
        } else {
          e.target.setCustomValidity("");
        }
      });
    }
    if (!e.target.validity.valid || (e.target.validity.valid && errors[name])) {
      setErrors((prevData) => {
        return {
          ...prevData,
          [name]: e.target.validity.valid ? "" : e.target.validationMessage,
        };
      });
      e.target.setAttribute("data-valid", false);
    }
  };

  function onChange(e) {
    const { name, value, checked } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: checked ? Boolean(checked) : value,
    }));
  };

  function onFocus(e) {
    setTouched((prevData) => ({
      ...prevData,
      [e.target.name]: true,
    }));
  };

  function resetForm() {
    formRef?.current?.reset();
    if (Object.keys(values).length > 0) setValues({});
  };

  function parseEntries(obj) {
    for (const [key, value] of Object.entries(obj)) {
      try {
        const parsed = JSON.parse(value);
        obj[key] = parsed;
      } catch (_error) { }
    }
    return obj;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).filter((key) => errors[key]).length) {
      e.preventDefault();
    }
    const form = e.target;
    const formData = new FormData(form);
    if (Object.keys(values).length > 0) {
      Object.keys(values).forEach(key => {
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
      }
      )
    }
    config.onSubmit(parseEntries(Object.fromEntries(formData.entries())));
  };

  return {
    formRef,
    values,
    errors,
    touched,
    setFieldValue: handleSetValues,
    onChange,
    onFocus,
    onValidate,
    handleSubmit,
    resetForm,
    validateOnChange: config?.validateOnChange,
    validateOnBlur: config?.validateOnBlur,
  };
};

export default useForm;
