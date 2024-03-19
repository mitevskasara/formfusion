import React, { useContext, useRef, useEffect } from "react";
import FormContext from "../../context";
import inputTypes from "../../constants/types";
import nativeTypes from "../../constants/nativeTypes";
import validity from "../../constants/validity";

const Input = ({
  type,
  validation = type?.startsWith("postal-code")
    ? validity["postal-code"]
    : validity[type],
  label,
  classes,
  className,
  mask,
  ...rest
}) => {
  const ref = useRef(null);
  const {
    errors,
    values,
    onValidate,
    onChange,
    onPaste,
    setFieldValue,
    validateOnChange,
    validateOnBlur,
    onFocus,
    controlled,
  } = useContext(FormContext);
  let inputClasses = className ? `${className}` : "";
  if (classes?.field) inputClasses += `${classes.field}`;

  useEffect(() => {
    if (controlled && !values[rest.name]) {
      setFieldValue(rest.name, "");
    }
  }, []);

  return (
    <div className={classes.root ?? ''}>
      <label htmlFor={rest.name} className={classes?.label}>
        {label}
      </label>
      <input
        {...rest}
        ref={ref}
        value={controlled ? values[rest.name] || "" : undefined}
        data-testid="input"
        data-mask={mask}
        className={inputClasses}
        type={nativeTypes.includes(type) ? type : "text"}
        pattern={
          rest.pattern
            ? rest.pattern
            : nativeTypes.includes(type)
              ? undefined
              : inputTypes[type] || type
        }
        onInput={
          mask || validateOnChange
            ? (e) => onValidate(e, validation)
            : undefined
        }
        onChange={controlled ? onChange : undefined}
        onFocus={controlled ? onFocus : undefined}
        onPaste={mask ? onPaste : undefined}
        onBlur={validateOnBlur ? (e) => onValidate(e, validation) : undefined}
        onInvalid={(e) => onValidate(e, validation)}
        data-type={inputTypes[type] && type}
        aria-invalid="false"
        aria-errormessage={
          !Boolean(ref?.current?.validity.valid)
            ? ref?.current?.validationMessage
            : undefined
        }
        title={
          !nativeTypes.includes(type)
            ? type?.startsWith("postal-code")
              ? validity["postal-code"].patternMismatch
              : validity[type]?.patternMismatch
            : undefined
        }
      />
      <span className={classes?.error}>{errors[rest.name]}</span>
    </div>
  );
};

export default Input;
