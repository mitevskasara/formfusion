import React, { useContext, useRef, useEffect, useMemo } from "react";
import FormContext from "../../context";

const Textarea = React.memo(
  ({ validation, label, classes, className, ...rest }) => {
    const ref = useRef(null);
    const {
      values,
      errors,
      onValidate,
      validateOnChange,
      validateOnBlur,
      setFieldValue,
      onChange,
      onFocus,
      controlled,
    } = useContext(FormContext);

    const textareaClasses = useMemo(() => {
      let textareaClasses = className || "";
      if (classes?.field) textareaClasses += classes.field;
      return textareaClasses;
    }, [className, classes]);

    useEffect(() => {
      if (controlled && !values[rest.name]) {
        setFieldValue(rest.name, "");
      }
    }, [controlled, rest.name, setFieldValue, values]);

    const handleInput = useMemo(() => {
      return validateOnChange ? (e) => onValidate(e, validation) : undefined;
    }, [onValidate, validation, validateOnChange]);

    const handleBlur = useMemo(() => {
      return validateOnBlur ? (e) => onValidate(e, validation) : undefined;
    }, [onValidate, validation, validateOnBlur]);

    return (
      <div className={classes?.root ?? ""}>
        <label htmlFor={rest.name} className={classes?.label}>
          {label}
        </label>
        <textarea
          {...rest}
          ref={ref}
          value={controlled ? values[rest.name] || "" : undefined}
          data-testid="textarea"
          className={textareaClasses}
          onInput={handleInput}
          onChange={controlled ? onChange : undefined}
          onFocus={controlled ? onFocus : undefined}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors[rest.name])}
          aria-errormessage={errors[rest.name] || undefined}
        />
        <span className={classes?.error}>{errors[rest.name]}</span>
      </div>
    );
  },
);

export default Textarea;
