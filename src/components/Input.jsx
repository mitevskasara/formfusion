import React, { useRef } from 'react';
import inputTypes from '../constants/types';
import nativeTypes from '../constants/nativeTypes';
import validity from '../constants/validity';
import { onPaste } from '../utils/helpers';
import useFormHelpers from '../hooks/useFormHelpers';
import inputModes from '../constants/inputmodes';
import hidden from '../constants/hidden';

const Input = ({
  type,
  validation = typeof type === 'string'
    ? type?.startsWith('postal-code')
      ? validity['postal-code']
      : validity[type]
    : validity[type],
  label,
  classes,
  className,
  mask,
  hideArrows = true,
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

  const joinedPatterns = typeof type === 'object' ? type.patterns : [];

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

  const Component = type === 'checkbox' ? 'label' : React.Fragment;
  const componentProps =
    type === 'checkbox'
      ? {
          className: `${labelClasses} FormFusion-Input__root__field--checkbox`,
          htmlFor: rest.id,
        }
      : {};

  if (hideArrows)
    inputClasses += ' FormFusion-Input__root__field--hidden-arrows';
  if (classes?.field)
    inputClasses += `FormFusion-Input__root__field ${classes.field}`;

  return (
    <div className={rootClasses}>
      <Component {...componentProps}>
        {type === 'checkbox' ? (
          <>{label}</>
        ) : (
          <label htmlFor={rest.id} className={labelClasses}>
            {label}
          </label>
        )}
        <input
          {...rest}
          ref={ref}
          defaultValue={controlled ? undefined : values && values[rest.name]}
          value={controlled ? values[rest.name] || '' : undefined}
          data-testid="input"
          data-mask={mask}
          className={inputClasses}
          type={nativeTypes.includes(type) ? type : hidden[type] || 'text'}
          data-pattern={JSON.stringify(joinedPatterns)}
          data-operator={type?.operator}
          pattern={
            joinedPatterns?.length > 0
              ? undefined
              : rest.pattern ||
                (nativeTypes.includes(type)
                  ? undefined
                  : inputTypes[type] || type)
          }
          onInput={
            mask || validateOnChange
              ? (e) => onValidate(e, validation)
              : undefined
          }
          maxLength={mask ? mask.length : rest.maxLength}
          onChange={controlled ? onChange : undefined}
          onFocus={controlled ? onFocus : undefined}
          onPaste={mask ? onPaste : undefined}
          onBlur={validateOnBlur ? (e) => onValidate(e, validation) : undefined}
          onInvalid={(e) => onValidate(e, validation)}
          data-type={inputTypes[type] && type}
          aria-describedby={helperText && `FormFusion-${rest.id}-helperText`}
          inputMode={rest.inputMode || inputModes[type] || 'text'}
        />
        {type === 'checkbox' && (
          <span className="FormFusion-Input__root__checkmark"></span>
        )}
      </Component>
      {helperText && (
        <span
          className={helperTextClasses}
          id={`FormFusion-${rest.id}-helperText`}
        >
          {helperText}
        </span>
      )}
      <span
        className={errorClasses}
        id={`FormFusion-${rest.id}-error`}
        aria-live="polite"
      >
        {errors[rest.name]}
      </span>
    </div>
  );
};

export default Input;
