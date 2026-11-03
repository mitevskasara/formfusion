import React, { useRef } from 'react';
import useFormHelpers from '../hooks/useFormHelpers';
import { updateValidity } from '../utils/validate';
import { callAll } from '../utils/helpers';

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
    value,
    error,
    validateOnChange,
    validateOnBlur,
    controlled,
    onChange,
    onFocus,
    onValidate,
  } = useFormHelpers(rest.name);

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
        value={controlled ? value || '' : undefined}
        data-testid="textarea"
        className={textareaClasses}
        onInput={callAll(
          validateOnChange
            ? (e) => onValidate(e, validation)
            : (e) => updateValidity(e.target, validation),
          rest.onInput
        )}
        onChange={callAll(controlled && onChange, rest.onChange)}
        onFocus={callAll(controlled && onFocus, rest.onFocus)}
        onBlur={callAll(
          validateOnBlur && ((e) => onValidate(e, validation)),
          rest.onBlur
        )}
        onInvalid={callAll((e) => onValidate(e, validation), rest.onInvalid)}
        aria-describedby={helperText && `FormFusion-${fieldId}-helperText`}
        aria-invalid={error ? 'true' : 'false'}
        aria-errormessage={error ? `FormFusion-${fieldId}-error` : undefined}
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
        {error}
      </span>
    </div>
  );
};

export default Textarea;
