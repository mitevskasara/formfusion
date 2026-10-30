import { useRef } from 'react';
import { resolveValidation } from './validate';
import getValidationProps from './validationProps';

const useConnect = (config, type, validation, props = {}) => {
  if (!props.name) {
    throw new Error('useConnect requires props.name, e.g. { name: "email" }.');
  }

  const {
    errors,
    controlled,
    onValidate,
    onChange,
    validateOnChange,
    validateOnBlur,
    onFocus,
  } = config;
  const inputRef = useRef(null);
  const { mask, ...inputProps } = props;
  const error = errors?.[props.name];

  return {
    ...inputProps,
    ref: inputRef,
    'aria-invalid': error ? 'true' : 'false',
    'aria-errormessage': error
      ? `FormFusion-${props.id || props.name}-error`
      : undefined,
    ...getValidationProps(type, resolveValidation(type, validation), {
      mask,
      pattern: props.pattern,
      maxLength: props.maxLength,
      inputMode: props.inputMode,
      onValidate,
      validateOnChange,
      validateOnBlur,
    }),
    onChange: controlled ? onChange : undefined,
    onFocus,
  };
};

export default useConnect;
