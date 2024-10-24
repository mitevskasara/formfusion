declare module "formfusion" {
  import * as React from "react";

  export interface CustomValidityValue {
    badInput?: string | "";
    customError?: string | "";
    patternMismatch?: string | "";
    rangeOverflow?: string | "";
    rangeUnderflow?: string | "";
    stepMismatch?: string | "";
    tooLong?: string | "";
    tooShort?: string | "";
    typeMismatch?: string | "";
    valid?: string | "";
    valueMissing?: string | "";
  }

  export interface CustomValidity {
    [key: string]: {
      badInput?: string | "";
      customError?: string | "";
      patternMismatch?: string | "";
      rangeOverflow?: string | "";
      rangeUnderflow?: string | "";
      stepMismatch?: string | "";
      tooLong?: string | "";
      tooShort?: string | "";
      typeMismatch?: string | "";
      valid?: string | "";
      valueMissing?: string | "";
    };
  }

  export interface FormValues {
    [key: string]: any;
  }

  export interface FormErrors {
    [key: string]: string;
  }

  export interface FormConfig {
    formRef: React.RefObject<HTMLFormElement>;
    values: FormValues;
    errors: FormErrors;
    touched: Record<string, boolean>;
    setFieldValue: (key: string, value: any) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
    onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
    onValidate: (
      e: React.ChangeEvent<HTMLInputElement>,
      customValidity?: CustomValidityValue,
    ) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    resetForm: () => void;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
  }

  interface FormConfigParams {
    config?: FormConfig;
    onSubmit?: (values: any) => void;
    initialValues?: any;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
  }

  interface FormProps
    extends FormConfigParams,
    Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> { }

  export type RegexPatterns = {
    NUMERIC: string;
    ALPHABETIC: string;
    ALPHANUMERIC: string;
    LOWERCASE: string;
    UPPERCASE: string;
    BOOLEAN: string;
    HEXADECIMAL: string;
    EMAIL: string;
    URL: string;
    USERNAME: string;
    SEARCH: string;
    TEL: string;
    PASSWORD: string;
    CREDIT_CARD_NUMBER_BASIC: string;
    CREDIT_CARD_NUMBER_HYPHEN: string;
    CREDIT_CARD_NUMBER_SPACE: string;
    CREDIT_CARD_NUMBER_AMEX: string;
    CREDIT_CARD_NUMBER_DINERSCLUB: string;
    CREDIT_CARD_NUMBER_DISCOVER: string;
    CREDIT_CARD_NUMBER_JBC: string;
    CREDIT_CARD_NUMBER_MASTERCARD: string;
    CREDIT_CARD_NUMBER_UNIONPAY: string;
    CREDIT_CARD_NUMBER_VISA: string;
    CCV: string;
    CCV_AMEX: string;
    IPV4: string;
    IPV6: string;
    UUID: string;
    GUID: string;
    // ISBN-10 codes
    // SSN: string;
    SSN: string;
    // SSN: string;
    EIN: string;
    ITIN: string;
    ATIN: string;
    PTIN: string;
    ASCII: string;
    BASE32: string;
    BASE58: string;
    BASE64: string;
    BIC: string;
    BTC_ADDRESS: string;
    CURRENCY: string;
    EAN: string;
    JAN: string;
    EAN_8: string;
    EAN_13: string;
    EAN_14: string;
    ETH_ADDRESS: string;
    FQDN: string;
    HEX_COLOR: string;
    HSL: string;
    HSL_COMMA: string;
    HSL_SPACE: string;
    IMEI: string;
    IMEI_HYPHEN: string;
    ISBN_10: string;
    ISBN_13: string;
    ISIN: string;
    ISRC: string;
    JWT: string;
    LAT: string;
    LONG: string;
    PORT: string;
  };

  type ReplaceUnderscoreWithHyphen<S extends string> =
    S extends `${infer Prefix}_${infer Suffix}`
    ? `${Prefix}-${ReplaceUnderscoreWithHyphen<Suffix>}`
    : S;

  type LowercaseKeys<T> = {
    [K in keyof T as K extends string
    ? ReplaceUnderscoreWithHyphen<Lowercase<K>>
    : never]: T[K];
  };

  type CamelCase<T extends string> =
    T extends `${infer Before}_${infer Char}${infer After}`
    ? `${Lowercase<Before>}${Capitalize<Char>}${CamelCase<After>}`
    : Lowercase<T>;

  type CamelCaseKeys<T> = {
    [K in keyof T as CamelCase<string & K>]: T[K];
  };

  type LowercaseKeysOfPatterns<T> = {
    [K in keyof T as K extends string ? Lowercase<K> : never]: T[K];
  };

  export type Types = LowercaseKeys<RegexPatterns>;

  export type NativeTypes =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

  export type Type = NativeTypes | keyof LowercaseKeys<RegexPatterns>;

  export type Rules = {
    length: (length: number) => string;
    minCharacters: (length: number) => string;
    maxCharacters: (length: number) => string;
    charactersRange: (from: number, to: number) => string;
    numberOfLetters: (length: number) => string;
    minLetters: (length: number) => string;
    maxLetters: (length: number) => string;
    lettersRange: (from: number, to: number) => string;
    contains: (str: string) => string;
    equals: (str: string) => string;
    startsWith: (str: string) => string;
    endsWith: (str: string) => string;
    existIn: (array: string[]) => string;
    notExistIn: (array: string[]) => string;
  } & CamelCaseKeys<RegexPatterns>;

  export type InputPropsBase = {
    name: string;
    validation?: CustomValidityValue;
    label?: string;
    classes?: { root?: string; field?: string; label?: string; error?: string; helperText?: string; };
    className?: string;
    mask?: string;
    hideArrows?: boolean;
    helperText?: string;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

  export type InputPropsWithType = InputPropsBase & {
    type: Type | string;
    pattern?: never;
  };

  export type InputPropsWithPattern = InputPropsBase & {
    pattern: string;
    type?: never;
  };

  export type InputProps = InputPropsWithType | InputPropsWithPattern;

  export type TextareaProps = {
    validation?: CustomValidityValue;
    label?: string;
    classes?: { root?: string; field?: string; label?: string; error?: string };
    className?: string;
  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

  export type SelectProps = {
    id: string;
    name: string;
    required?: boolean;
    multiple?: boolean;
    validation?: CustomValidityValue;
    label?: string;
    classes?: { root?: string; field?: string; label?: string; error?: string; helperText?: string; };
    className?: string;
    options: Array<{ value: string; label: string }>;
    helperText?: string;
  };

  export const Form: (props: FormProps) => any;

  export const Input: (props: InputProps) => any;

  export const Textarea: (props: TextareaProps) => any;

  export const Select: (props: SelectProps) => any;

  export const useForm: (config: FormConfigParams) => FormConfig;

  export const connect: (config: FormConfigParams, type: Type) => object;

  export const rules: Rules;
}
