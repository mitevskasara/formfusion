import React, { useRef } from 'react';
import useFormHelpers from '../hooks/useFormHelpers';

const Textarea = ({
  validation,
  label,
  classes,
  className,
  helperText,
  ...rest
}) => {
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

  const fieldId = rest.id || rest.name;

  let rootClasses = classes?.root
    ? `FormFusion-Textarea__root ${classes.root}`
    : 'FormFusion-Textarea__root';
  let textareaClasses = className
    ? `FormFusion-Textarea__root__field ${className}`
    : 'FormFusion-Textarea__root__field';
  let labelClasses = classes?.label
    ? `FormFusion-Textarea__root__label ${classes?.label}`
    : 'FormFusion-Textarea__root__label';
  let errorClasses = classes?.error
    ? `FormFusion-Textarea__root__error ${classes?.error}`
    : 'FormFusion-Textarea__root__error';
  let helperTextClasses = classes?.helperText
    ? `FormFusion-Input__root__field__helper-text ${classes?.helperText}`
    : 'FormFusion-Input__root__field__helper-text';

  if (classes?.field) textareaClasses += ` ${classes.field}`;

  return (
    <div className={rootClasses}>
      <label htmlFor={fieldId} className={labelClasses}>
        {label}
      </label>
      <textarea
        {...rest}
        ref={ref}
        value={controlled ? values[rest.name] || '' : undefined}
        data-testid="textarea"
        className={textareaClasses}
        onInput={
          validateOnChange ? (e) => onValidate(e, validation) : undefined
        }
        onChange={controlled ? onChange : undefined}
        onFocus={controlled ? onFocus : undefined}
        onBlur={validateOnBlur ? (e) => onValidate(e, validation) : undefined}
        onInvalid={(e) => onValidate(e, validation)}
        aria-describedby={helperText && `FormFusion-${fieldId}-helperText`}
      />
      {helperText && (
        <span
          className={helperTextClasses}
          id={`FormFusion-${fieldId}-helperText`}
        >
          {helperText}
        </span>
      )}
      <span
        className={errorClasses}
        id={`FormFusion-${fieldId}-error`}
        aria-live="polite"
      >
        {errors[rest.name]}
      </span>
    </div>
  );
};

export default Textarea;
