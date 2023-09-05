import React, { useContext, useRef } from "react";
import FormContext from "../../context";
import inputTypes from "../../constants/patterns";
import nativeTypes from "../../constants/nativeTypes";

const Input = ({ type, validation = undefined, label, classes, className, ...rest }) => {
  const ref = useRef(null);
  const {
    errors,
    onValidate,
    validateOnChange,
    validateOnBlur
  } = useContext(FormContext);
  let inputClasses = className ? `${className}` : "";
  if (classes?.input) inputClasses += `${classes.input}`;
  return (
    <>
      <label htmlFor={rest.name} className={classes?.label}>
        {label}
      </label>
      <input
        {...rest}
        data-testid="input"
        className={inputClasses}
        ref={ref}
        type={nativeTypes.includes(type) ? type : "text"}
        pattern={rest.pattern || inputTypes[type] || type}
        onInput={
          validateOnChange ? (e) => onValidate(e, validation) : undefined
        }
        onBlur={validateOnBlur ? (e) => onValidate(e, validation) : undefined}
        onInvalid={(e) => onValidate(e, validation)}
        data-type={inputTypes[type] && type}
        aria-invalid={!Boolean(ref?.current?.validity.valid) ? 'true' : 'false'}
        aria-errormessage={!Boolean(ref?.current?.validity.valid) ? ref?.current?.validationMessage : undefined}
      />
      <span className={classes?.error}>{errors[rest.name]}</span>
    </>
  );
};

export default Input;
