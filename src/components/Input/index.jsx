import React, { useContext, useRef, useEffect, useMemo } from "react";
import FormContext from "../../context";
import inputTypes from "../../constants/types";
import nativeTypes from "../../constants/nativeTypes";
import validity from "../../constants/validity";

const Input = React.memo(
  ({
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

    const inputClasses = useMemo(() => {
      let inputClasses = className || "";
      if (classes?.field) inputClasses += classes.field;
      return inputClasses;
    }, [className, classes]);

    useEffect(() => {
      if (controlled && !values[rest.name]) {
        setFieldValue(rest.name, "");
      }
    }, [controlled, rest.name, setFieldValue, values]);

    const handleInput = useMemo(() => {
      return (validateOnChange || mask) ? (e) => onValidate(e, validation) : undefined;
    }, [mask, onValidate, validation, validateOnChange]);

    const handleError = useMemo(() => {
      return !nativeTypes.includes(type)
        ? type?.startsWith("postal-code")
          ? validity["postal-code"].patternMismatch
          : validity[type]?.patternMismatch
        : undefined;
    }, [type]);

    return (
      <div className={classes?.root ?? ""}>
        <label htmlFor={rest.name} className={classes?.label}>
          {label}
        </label>
        <input
          {...rest}
          ref={ref}
          value={controlled ? values[rest.name] || "" : undefined}
          data-testid="input"
          className={inputClasses}
          type={nativeTypes.includes(type) ? type : "text"}
          pattern={
            rest.pattern
              ? rest.pattern
              : nativeTypes.includes(type)
                ? undefined
                : inputTypes[type] || type
          }
          onInput={handleInput}
          onChange={controlled ? onChange : undefined}
          onFocus={controlled ? onFocus : undefined}
          onPaste={mask ? onPaste : undefined}
          onBlur={validateOnBlur ? (e) => onValidate(e, validation) : undefined}
          onInvalid={(e) => onValidate(e, validation)}
          aria-invalid={!Boolean(ref?.current?.validity.valid)}
          aria-errormessage={errors[rest.name] || undefined}
          title={handleError}
        />
        <span className={classes?.error}>{errors[rest.name]}</span>
      </div>
    );
  }
);

export default Input;
