import { useRef } from 'react';
import inputTypes from '../constants/types';
import nativeTypes from '../constants/nativeTypes';
import hiddenTypes from '../constants/hidden';
import { resolveValidation, updateValidity } from './validate';

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

  const isStringType = typeof type === 'string';
  const resolvedValidation = resolveValidation(type, validation);

  const isNative = isStringType && nativeTypes.includes(type);
  const inputType = isNative
    ? type
    : isStringType && hiddenTypes[type]
      ? hiddenTypes[type]
      : 'text';
  const pattern = props.pattern
    ? props.pattern
    : isNative || !isStringType
      ? undefined
      : inputTypes[type] || type;

  return {
    ...props,
    ref: inputRef,
    'aria-invalid': errors?.[props.name] ? 'true' : 'false',
    'aria-errormessage': errors?.[props.name]
      ? `FormFusion-${props.id || props.name}-error`
      : undefined,
    type: inputType,
    pattern,
    onInput: validateOnChange
      ? (e) => onValidate(e, resolvedValidation)
      : (e) => updateValidity(e.target, resolvedValidation),
    onChange: controlled ? onChange : undefined,
    onFocus: onFocus,
    onBlur: validateOnBlur
      ? (e) => onValidate(e, resolvedValidation)
      : undefined,
    onInvalid: (e) => onValidate(e, resolvedValidation),
    'data-type': inputTypes[type] && type,
  };
};

export default useConnect;
