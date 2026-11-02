import { useRef, useState } from 'react';
import reducer, { initialState } from '../state/reducer';
import createStore from '../state/store';
import useStoreSelector from '../hooks/useStoreSelector';
import { resolveValidation } from './validate';
import getValidationProps from './validationProps';

const useConnect = (config, type, validation, props = {}) => {
  if (!props.name) {
    throw new Error('useConnect requires props.name, e.g. { name: "email" }.');
  }

  const {
    store,
    controlled,
    onValidate,
    onChange,
    validateOnChange,
    validateOnBlur,
    onFocus,
  } = config;
  const inputRef = useRef(null);
  const [localStore] = useState(() => createStore(reducer, initialState));
  const storeError = useStoreSelector(
    store ?? localStore,
    (state) => state.errors?.[props.name]
  );
  const { mask, ...inputProps } = props;
  const error = store ? storeError : config.errors?.[props.name];

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
