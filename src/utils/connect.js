import inputTypes from "../constants/types";
import nativeTypes from "../constants/nativeTypes";
import validity from "../constants/validity";
import { useEffect } from "react";

const connect = (
  config,
  ref,
  type,
  validation = type.startsWith("postal-code")
    ? validity["postal-code"]
    : validity[type],
  ...rest
) => {
  const {
    values,
    onValidate,
    onChange,
    setValues,
    validateOnChange,
    validateOnBlur,
    onFocus,
  } = config;

  useEffect(() => {
    if (!values[ref?.current?.name]) {
      setValues((prevData) => ({
        ...prevData,
        [ref?.current?.name]: "",
      }));
    }
  }, []);

  return {
    value: values[ref?.current?.name] || "",
    ref,
    type: nativeTypes.includes(type) ? type : "text",
    pattern: rest.pattern || inputTypes[type] || type,
    onInput: validateOnChange ? (e) => onValidate(e, validation) : undefined,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: validateOnBlur ? (e) => onValidate(e, validation) : undefined,
    onInvalid: (e) => onValidate(e, validation),
    "data-type": inputTypes[type] && type,
    "aria-invalid": !Boolean(ref?.current?.validity?.valid) ? "true" : "false",
    "aria-errormessage": !Boolean(ref?.current?.validity?.valid)
      ? ref?.current?.validationMessage
      : undefined,
  };
};

export default connect;
