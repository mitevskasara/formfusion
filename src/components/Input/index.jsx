import React, { useRef } from "react";
import inputTypes from "../../constants/types";
import nativeTypes from "../../constants/nativeTypes";
import validity from "../../constants/validity";
import { onPaste } from "../../utils/helpers";
import useFormHelpers from "../../hooks/useFormHelpers";

const Input = ({
  type,
  validation = type?.startsWith("postal-code")
    ? validity["postal-code"]
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
  let rootClasses = classes?.root ? `FormFusion-Input__root ${classes?.root}` : "FormFusion-Input__root";
  let inputClasses = className ? `FormFusion-Input__root__field ${className}` : "FormFusion-Input__root__field";
  let labelClasses = classes?.label ? `FormFusion-Input__root__label ${classes?.label}` : "FormFusion-Input__root__label";
  let errorClasses = classes?.error ? `FormFusion-Input__root__error ${classes?.error}` : "FormFusion-Input__root__error";
  let helperTextClasses = classes?.helperText ? `FormFusion-Input__root__field__helper-text ${classes?.helperText}` : 'FormFusion-Input__root__field__helper-text';

  const Component = type === 'checkbox' ? 'label' : React.Fragment;
  const componentProps = type === 'checkbox' ? {
    className: `${labelClasses} FormFusion-Input__root__field--checkbox`,
    htmlFor: rest.id
  } : {};

  if (hideArrows) inputClasses += ' FormFusion-Input__root__field--hidden-arrows';
  if (classes?.field) inputClasses += `FormFusion-Input__root__field ${classes.field}`;

  return (
    <div className={rootClasses}>
      <Component {...componentProps}>
        {type !== 'checkbox' &&
          <label htmlFor={rest.id} className={labelClasses}>
            {label}
          </label>}
        {type === 'checkbox' &&
          <>{label}</>}
        <input
          {...rest}
          ref={ref}
          defaultValue={controlled ? undefined : values && values[rest.name]}
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
        {type === 'checkbox' &&
          <span className="FormFusion-Input__root__checkmark"></span>}
      </Component>
      {helperText && <span className={helperTextClasses}>{helperText}</span>}
      <span className={errorClasses}>{errors[rest.name]}</span>
    </div>
  );
};

export default Input;
