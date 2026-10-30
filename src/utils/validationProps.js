import inputTypes from '../constants/types';
import nativeTypes from '../constants/nativeTypes';
import hiddenTypes from '../constants/hidden';
import inputModes from '../constants/inputmodes';
import { onPaste } from './helpers';
import { updateValidity } from './validate';

function getValidationProps(type, validation, options) {
  const {
    mask,
    pattern,
    maxLength,
    inputMode,
    onValidate,
    validateOnChange,
    validateOnBlur,
  } = options;
  const combinedPatterns = typeof type === 'object' ? type.patterns : [];
  const isNative = nativeTypes.includes(type);
  const validate = (e) => onValidate(e, validation);

  return {
    type: isNative ? type : hiddenTypes[type] || 'text',
    pattern:
      combinedPatterns?.length > 0
        ? undefined
        : pattern || (isNative ? undefined : inputTypes[type] || type),
    'data-pattern': JSON.stringify(combinedPatterns),
    'data-operator': type?.operator,
    'data-mask': mask,
    'data-type': inputTypes[type] && type,
    maxLength: mask ? mask.length : maxLength,
    inputMode: inputMode || inputModes[type] || 'text',
    onPaste: mask ? onPaste : undefined,
    onInput:
      mask || validateOnChange
        ? validate
        : (e) => updateValidity(e.target, validation),
    onBlur: validateOnBlur ? validate : undefined,
    onInvalid: validate,
  };
}

export default getValidationProps;
