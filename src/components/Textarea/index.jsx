import React, { useContext, useRef } from "react";
import FormContext from "../../context";

const Textarea = ({ type, validation, label, classes, className, ...rest }) => {
  const ref = useRef(null);
  const {
    errors,
    onValidate,
    validateOnChange,
    validateOnBlur
  } = useContext(FormContext);
  let textareaClasses = className ? `${className}` : "";
  if (classes?.field) textareaClasses += `${classes.field}`;
  return (
    <>
      <label htmlFor={rest.name} className={classes?.label}>
        {label}
      </label>
      <textarea
        {...rest}
        ref={ref}
        data-testid="textarea"
        className={textareaClasses}
        onInput={
          validateOnChange ? (e) => onValidate(e, validation) : undefined
        }
        onBlur={validateOnBlur ? (e) => onValidate(e, validation) : undefined}
        onInvalid={(e) => onValidate(e, validation)}
        aria-invalid={errors[rest.name] ? 'true' : 'false'}
        aria-errormessage={errors[rest.name] || undefined}
      />
      <span className={classes?.error}>{errors[rest.name]}</span>
    </>
  );
};

export default Textarea;
