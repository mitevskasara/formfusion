import { useState, useRef } from "react";
import maskInput from "../utils/mask";

const useForm = (config) => {
  const formRef = useRef(null);
  const [values, setValues] = useState(config.initialValues || {});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleSetValues = (key, value) => {
    setValues((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const onValidate = (e, customValidity) => {
    e.preventDefault();
    const { name, value, validity } = e.target;

    if (customValidity) {
      Object.keys(customValidity).forEach((key) => {
        if (validity[key]) {
          e.target.setCustomValidity(customValidity[key]);
        } else {
          e.target.setCustomValidity("");
        }
      });
    }

    e.target.setAttribute("aria-invalid", !Boolean(validity.valid));

    if (!validity.valid || (validity.valid && errors[name])) {
      setErrors((prevData) => ({
        ...prevData,
        [name]: validity.valid ? "" : e.target.validationMessage,
      }));
    }

    const mask = e.target.dataset.mask;

    if (mask) {
      e.target.value = maskInput(mask, value);
    }
  };

  const onChange = (e) => {
    const { name, value, checked } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: checked ? Boolean(checked) : value,
    }));
  };

  const onFocus = (e) => {
    setTouched((prevData) => ({
      ...prevData,
      [e.target.name]: true,
    }));
  };

  const onPaste = (e) => {
    const { dataset } = e.target;
    let paste = (e.clipboardData || window.clipboardData).getData("text");
    const mask = dataset.mask;
    if (mask) {
      e.target.value = maskInput(mask, paste);
    }
  };

  const resetForm = () => {
    formRef.current?.reset();
    setValues({});
  };

  const parseEntries = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
      try {
        const parsed = JSON.parse(value);
        obj[key] = parsed;
      } catch (_error) {}
    }
    return obj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) {
      return;
    }
    const formData = new FormData(e.target);
    const parsedFormData = parseEntries(Object.fromEntries(formData.entries()));
    config.onSubmit(parsedFormData);
  };

  return {
    formRef,
    values,
    errors,
    touched,
    setFieldValue: handleSetValues,
    onChange,
    onFocus,
    onPaste,
    onValidate,
    handleSubmit,
    resetForm,
    validateOnChange: config?.validateOnChange,
    validateOnBlur: config?.validateOnBlur,
  };
};

export default useForm;
