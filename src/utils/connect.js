import { useRef } from "react";
import inputTypes from "../constants/types";
import nativeTypes from "../constants/nativeTypes";
import validity from "../constants/validity";

const connect = (
  config,
  type,
  validation = type?.startsWith("postal-code")
    ? validity["postal-code"]
    : validity[type],
  ...rest
) => {
  const {
    controlled,
    onValidate,
    onChange,
    validateOnChange,
    validateOnBlur,
    onFocus,
  } = config;
  const inputRef = useRef(null);

  return {
    ref: inputRef,
    type: nativeTypes.includes(type) ? type : "text",
    pattern: rest.pattern || inputTypes[type] || type,
    onInput: validateOnChange ? (e) => onValidate(e, validation) : undefined,
    onChange: controlled ? onChange : undefined,
    onFocus: onFocus,
    onBlur: validateOnBlur ? (e) => onValidate(e, validation) : undefined,
    onInvalid: (e) => onValidate(e, validation),
    "data-type": inputTypes[type] && type,
    "aria-invalid": !Boolean(inputRef?.current?.validity?.valid)
      ? "true"
      : "false",
    "aria-errormessage": !Boolean(inputRef?.current?.validity?.valid)
      ? inputRef?.current?.validationMessage
      : undefined,
  };
};

export default connect;
