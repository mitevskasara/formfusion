import React, { useContext, useRef, useEffect } from "react";
import FormContext from "../../context";

const Textarea = ({ validation, label, classes, className, ...rest }) => {
  const ref = useRef(null);
  const {
    values,
    errors,
    onValidate,
    validateOnChange,
    validateOnBlur,
    setValues,
    onChange,
    onFocus,
    controlled,
  } = useContext(FormContext);
  let textareaClasses = className ? `${className}` : "";
  if (classes?.field) textareaClasses += `${classes.field}`;

  useEffect(() => {
    if (controlled && !values[rest.name]) {
      setValues((prevData) => ({
        ...prevData,
        [rest.name]: "",
      }));
    }
  }, []);

  return (
    <>
      <label htmlFor={rest.name} className={classes?.label}>
        {label}
      </label>
      <textarea
        {...rest}
        ref={ref}
        value={controlled ? values[rest.name] || "" : undefined}
        data-testid="textarea"
        className={textareaClasses}
        onInput={
          validateOnChange ? (e) => onValidate(e, validation) : undefined
        }
        onChange={controlled ? onChange : undefined}
        onFocus={controlled ? onFocus : undefined}
        onBlur={validateOnBlur ? (e) => onValidate(e, validation) : undefined}
        onInvalid={(e) => onValidate(e, validation)}
        aria-invalid={errors[rest.name] ? "true" : "false"}
        aria-errormessage={errors[rest.name] || undefined}
      />
      <span className={classes?.error}>{errors[rest.name]}</span>
    </>
  );
};

export default Textarea;
