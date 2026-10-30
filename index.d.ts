declare module 'formfusion' {
  import * as React from 'react';

  export interface CustomValidityValue {
    badInput?: string;
    customError?: string;
    patternMismatch?: string;
    rangeOverflow?: string;
    rangeUnderflow?: string;
    stepMismatch?: string;
    tooLong?: string;
    tooShort?: string;
    typeMismatch?: string;
    valid?: string;
    valueMissing?: string;
    invalid?: string;
  }

  export interface FormValues {
    [key: string]: any;
  }

  export interface FormErrors {
    [key: string]: string;
  }

  export interface UseFormParams {
    formRef?: React.RefObject<HTMLFormElement>;
    initialValues?: any;
    onSubmit?: (values: any) => void;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
  }

  export interface FormConfig extends Omit<UseFormParams, 'formRef'> {
    formRef: React.RefObject<HTMLFormElement>;
    values: FormValues;
    errors: FormErrors;
    touched: Record<string, boolean>;
    setFieldValue: (key: string, value: any) => void;
    onValidate: (
      e: React.ChangeEvent<HTMLInputElement>,
      customValidity?: CustomValidityValue
    ) => void;
    resetForm: () => void;
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
      Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {}

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
    SSN: string;
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

  export type Types = LowercaseKeys<RegexPatterns>;

  export type NativeTypes =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';

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

  type PatternOperator = 'and' | 'or' | 'nor';

  interface CombineResult {
    patterns: string[];
    operator: PatternOperator;
  }

  interface CombineFunctions {
    and: (...args: string[]) => CombineResult;
    or: (...args: string[]) => CombineResult;
    nor: (...args: string[]) => CombineResult;
  }

  export type InputPropsBase = {
    name: string;
    validation?: CustomValidityValue;
    label?: string;
    classes?: {
      root?: string;
      field?: string;
      label?: string;
      error?: string;
      helperText?: string;
    };
    className?: string;
    mask?: string;
    hideArrows?: boolean;
    helperText?: string;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

  export type InputPropsWithType = InputPropsBase & {
    type: Type | (string & {}) | CombineResult;
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
    id?: string;
    name: string;
    required?: boolean;
    multiple?: boolean;
    validation?: CustomValidityValue | string;
    label?: string;
    placeholder?: string;
    classes?: {
      root?: string;
      field?: string;
      label?: string;
      error?: string;
      helperText?: string;
    };
    className?: string;
    options: Array<{ value: string; label: string }>;
    helperText?: string;
  };

  export const combine: CombineFunctions;

  export const Form: React.ForwardRefExoticComponent<
    FormProps & React.RefAttributes<HTMLFormElement>
  >;

  export const Input: (props: InputProps) => React.ReactElement;

  export const Textarea: (props: TextareaProps) => React.ReactElement;

  export const Select: (props: SelectProps) => React.ReactElement;

  export const useForm: (config: UseFormParams) => FormConfig;

  export interface ConnectProps<T extends HTMLElement = HTMLInputElement> {
    ref: React.RefObject<T | null>;
    name: string;
    type: string;
    pattern?: string;
    onInput?: React.FormEventHandler<T>;
    onChange?: React.ChangeEventHandler<T>;
    onFocus?: React.FocusEventHandler<T>;
    onBlur?: React.FocusEventHandler<T>;
    onInvalid: React.FormEventHandler<T>;
    'data-type'?: string;
    'data-pattern': string;
    'data-operator'?: string;
    'data-mask'?: string;
    maxLength?: number;
    inputMode: React.HTMLAttributes<T>['inputMode'];
    onPaste?: React.ClipboardEventHandler<T>;
    'aria-invalid': 'true' | 'false';
    'aria-errormessage'?: string;
  }

  export interface ConnectConfig extends Partial<FormConfig> {
    onValidate: FormConfig['onValidate'];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    controlled?: boolean;
  }

  export const useConnect: <
    T extends HTMLElement = HTMLInputElement,
    P extends Record<string, any> = {},
  >(
    config: ConnectConfig,
    type: Type | CombineResult,
    validation: CustomValidityValue | undefined,
    props: P & { name: string; id?: string; pattern?: string; mask?: string }
  ) => Omit<P, 'mask'> & ConnectProps<T>;

  export const rules: Rules;
}
