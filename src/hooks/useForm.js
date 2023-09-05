import { useState, useRef } from "react";

const useForm = (config) => {
  const formRef = useRef(null);
  const [values, setValues] = useState(config.initialValues || {});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const onValidate = (e, customValidity) => {
    e.preventDefault();
    const { name, validity } = e.target;
    if (customValidity) {
      Object.keys(customValidity).map((key) => {
        if (validity[key]) {
          e.target.setCustomValidity(customValidity[key]);
        } else {
          e.target.setCustomValidity('');
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
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onFocus = (e) => {
    setTouched((prevData) => ({
      ...prevData,
      [e.target.name]: true,
    }));
  };

  const resetForm = () => {
    formRef?.current?.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    if (Object.keys(errors).filter((key) => errors[key]).length) {
      e.preventDefault();
    }
    config.onSubmit(Object.fromEntries(formData.entries()));
  };

  return {
    formRef,
    values,
    errors,
    touched,
    setValues,
    onChange,
    onFocus,
    onValidate,
    handleSubmit,
    resetForm
  };
};

export default useForm;
