import { useRef } from "react";
import inputTypes from "../constants/types";
import nativeTypes from "../constants/nativeTypes";

const connect = (config, type, validation = '') => {
  const {
    controlled,
    onValidate,
    onChange,
    validateOnChange,
    validateOnBlur,
    onFocus,
  } = config;

  const inputRef = useRef(null);

  const pattern = nativeTypes.includes(type) ? undefined : inputTypes[type] || type;
  const onInput = validateOnChange ? (e) => onValidate(e, validation) : undefined;
  const onBlur = validateOnBlur ? onInput : undefined;

  const isValid = inputRef?.current?.validity?.valid;
  const ariaInvalid = isValid ? "false" : "true";
  const ariaErrormessage = isValid ? undefined : inputRef?.current?.validationMessage;

  return {
    ref: inputRef,
    type: nativeTypes.includes(type) ? type : "text",
    pattern,
    onInput,
    onChange: controlled ? onChange : undefined,
    onFocus,
    onBlur,
    onInvalid: onInput,
    "data-type": inputTypes[type] && type,
    "aria-invalid": ariaInvalid,
    "aria-errormessage": ariaErrormessage,
  };
};

export default connect;
