import React, { useRef } from 'react';
import useFormHelpers from '../hooks/useFormHelpers';
import { resolveValidation } from '../utils/validate';
import getValidationProps from '../utils/validationProps';

const Input = ({
  type,
  validation: customValidation,
  label,
  classes,
  className,
  mask,
  hideArrows = true,
  helperText,
  ...rest
}) => {
  const ref = useRef(null);
  const validation = resolveValidation(type, customValidation);
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
    ? `FormFusion-Input__root ${classes?.root}`
    : 'FormFusion-Input__root';
  let inputClasses = className
    ? `FormFusion-Input__root__field ${className}`
    : 'FormFusion-Input__root__field';
  let labelClasses = classes?.label
    ? `FormFusion-Input__root__label ${classes?.label}`
    : 'FormFusion-Input__root__label';
  let errorClasses = classes?.error
    ? `FormFusion-Input__root__error ${classes?.error}`
    : 'FormFusion-Input__root__error';
  let helperTextClasses = classes?.helperText
    ? `FormFusion-Input__root__field__helper-text ${classes?.helperText}`
    : 'FormFusion-Input__root__field__helper-text';

  const isCheckbox = type === 'checkbox';
  const Component = isCheckbox ? 'label' : React.Fragment;
  const componentProps = isCheckbox
    ? {
        className: `${labelClasses} FormFusion-Input__root__field--checkbox`,
        htmlFor: fieldId,
      }
    : {};

  if (hideArrows)
    inputClasses += ' FormFusion-Input__root__field--hidden-arrows';
  if (classes?.field) inputClasses += ` ${classes.field}`;

  return (
    <div className={rootClasses}>
      <Component {...componentProps}>
        {isCheckbox ? (
          <>{label}</>
        ) : (
          <label htmlFor={fieldId} className={labelClasses}>
            {label}
          </label>
        )}
        <input
          {...rest}
          ref={ref}
          defaultValue={controlled || isCheckbox ? undefined : value}
          value={isCheckbox ? rest.value : controlled ? value || '' : undefined}
          checked={controlled && isCheckbox ? Boolean(value) : undefined}
          defaultChecked={
            !controlled && isCheckbox
              ? (value ?? rest.defaultChecked)
              : undefined
          }
          data-testid="input"
          className={inputClasses}
          {...getValidationProps(type, validation, {
            mask,
            pattern: rest.pattern,
            maxLength: rest.maxLength,
            inputMode: rest.inputMode,
            onValidate,
            validateOnChange,
            validateOnBlur,
          })}
          onChange={controlled ? onChange : undefined}
          onFocus={controlled ? onFocus : undefined}
          aria-describedby={helperText && `FormFusion-${fieldId}-helperText`}
          aria-invalid={error ? 'true' : 'false'}
          aria-errormessage={error ? `FormFusion-${fieldId}-error` : undefined}
        />
        {isCheckbox && (
          <span className="FormFusion-Input__root__checkmark"></span>
        )}
      </Component>
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

export default Input;
