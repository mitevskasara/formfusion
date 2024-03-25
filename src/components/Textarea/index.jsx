import React, { useRef } from "react";
import useFormHelpers from "../../hooks/useFormHelpers";

const Textarea = ({ validation, label, classes, className, ...rest }) => {
  const ref = useRef(null);
  const {
    values,
    errors,
    validateOnChange,
    validateOnBlur,
    controlled,
    onChange,
    onFocus,
    onValidate,
  } = useFormHelpers();

  let textareaClasses = className ? `${className}` : "";
  if (classes?.field) textareaClasses += `${classes.field}`;

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
    </div>
  );
};

export default Textarea;
