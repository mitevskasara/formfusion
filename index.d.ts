declare module '@corelabui/rfm' {
  import * as React from 'react';

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

  interface FormProps extends FormConfigParams, Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> { }

  export type PostalCodes = {
    AF: string;
    AX: string;
    AL: string;
    DZ: string;
    AS: string;
    AD: string;
    AI: string;
    AR: string;
    AM: string;
    AC: string;
    AU: string;
    AT: string;
    AZ: string;
    BH: string;
    BD: string;
    BB: string;
    BY: string;
    BE: string;
    BJ: string;
    BM: string;
    BT: string;
    BA: string;
    BR: string;
    IO: string;
    VG: string;
    BN: string;
    BG: string;
    BF: string;
    KH: string;
    CA: string;
    CV: string;
    CY: string;
    CR: string;
    HR: string;
    CU: string;
    CL: string;
    CO: string;
    CN: string;
    CX: string;
    CZ: string;
    DK: string;
    DO: string;
    EC: string;
    EG: string;
    SV: string;
    EE: string;
    ET: string;
    FO: string;
    FK: string;
    FI: string;
    FR: string;
    GF: string;
    PF: string;
    GE: string;
    DE: string;
    GI: string;
    GR: string;
    GL: string;
    GP: string;
    GU: string;
    GT: string;
    GG: string;
    GN: string;
    GW: string;
    HT: string;
    HM: string;
    VA: string;
    HN: string;
    HU: string;
    IS: string;
    IN: string;
    ID: string;
    IR: string;
    IQ: string;
    IE: string;
    IM: string;
    IL: string;
    IT: string;
    JM: string;
    JP: string;
    JE: string;
    JO: string;
    KZ: string;
    KE: string;
    KI: string;
    XK: string;
    KW: string;
    KY: string;
    KG: string;
    LA: string;
    LV: string;
    LB: string;
    LS: string;
    LR: string;
    LY: string;
    LI: string;
    LT: string;
    LU: string;
    MG: string;
    MW: string;
    MY: string;
    MV: string;
    MT: string;
    MH: string;
    MQ: string;
    MU: string;
    YT: string;
    MX: string;
    FM: string;
    MD: string;
    MC: string;
    MN: string;
    ME: string;
    MS: string;
    MA: string;
    MZ: string;
    MM: string;
    NA: string;
    NR: string;
    NP: string;
    NL: string;
    NC: string;
    NZ: string;
    NI: string;
    NE: string;
    NG: string;
    NU: string;
    NF: string;
    MK: string;
    MP: string;
    NO: string;
    OM: string;
    PK: string;
    PW: string;
    PS: string;
    PA: string;
    PG: string;
    PY: string;
    PE: string;
    PH: string;
    PN: string;
    PL: string;
    PT: string;
    PR: string;
    RE: string;
    RO: string;
    RU: string;
    BL: string;
    SH: string;
    KN: string;
    LC: string;
    MF: string;
    PM: string;
    VC: string;
    WS: string;
    SM: string;
    SA: string;
    SN: string;
    RS: string;
    SG: string;
    SK: string;
    SI: string;
    SO: string;
    ZA: string;
    GS: string;
    KR: string;
    SS: string;
    ES: string;
    LK: string;
    SD: string;
    SJ: string;
    SZ: string;
    SE: string;
    CH: string;
    TW: string;
    TJ: string;
    TZ: string;
    TH: string;
    TT: string;
    TN: string;
    TR: string;
    TM: string;
    TC: string;
    UA: string;
    GB: string;
    US: string;
    VI: string;
    UY: string;
    UZ: string;
    VE: string;
    VN: string;
    WF: string;
    EH: string;
    ZM: string;
  };

  export type Ibans = {
    AD: string;
    AE: string;
    AL: string;
    AT: string;
    AZ: string;
    BA: string;
    BE: string;
    BG: string;
    BH: string;
    BR: string;
    BY: string;
    CH: string;
    CR: string;
    CY: string;
    CZ: string;
    DE: string;
    DK: string;
    DO: string;
    EE: string;
    EG: string;
    ES: string;
    FI: string;
    FO: string;
    FR: string;
    GB: string;
    GE: string;
    GI: string;
    GL: string;
    GR: string;
    GT: string;
    HR: string;
    HU: string;
    IE: string;
    IL: string;
    IQ: string;
    IR: string;
    IS: string;
    IT: string;
    JO: string;
    KW: string;
    KZ: string;
    LB: string;
    LC: string;
    LI: string;
    LT: string;
    LU: string;
    LV: string;
    MA: string;
    MC: string;
    MD: string;
    ME: string;
    MK: string;
    MR: string;
    MT: string;
    MU: string;
    MZ: string;
    NL: string;
    NO: string;
    PK: string;
    PL: string;
    PS: string;
    PT: string;
    QA: string;
    RO: string;
    RS: string;
    SA: string;
    SC: string;
    SE: string;
    SI: string;
    SK: string;
    SM: string;
    SV: string;
    TL: string;
    TN: string;
    TR: string;
    UA: string;
    VA: string;
    VG: string;
    XK: string;
  };

  export type LicencePlates = {
    CZ: string;
    DE: string;
    LI: string;
    IN: string;
    AR: string;
    FI: string;
    HU: string;
    BR: string;
    PT: string;
    AL: string;
    SE: string;
  };

  export type PassportNumbers = {
    AM: string;
    AR: string;
    AT: string;
    AU: string;
    AZ: string;
    BE: string;
    BG: string;
    BR: string;
    BY: string;
    CA: string;
    CH: string;
    CN: string;
    CY: string;
    CZ: string;
    DE: string;
    DK: string;
    DZ: string;
    EE: string;
    ES: string;
    FI: string;
    FR: string;
    GB: string;
    GR: string;
    HR: string;
    HU: string;
    IE: string;
    IN: string;
    ID: string;
    IR: string;
    IS: string;
    IT: string;
    JM: string;
    JP: string;
    KR: string;
    KZ: string;
    LI: string;
    LT: string;
    LU: string;
    LV: string;
    LY: string;
    MT: string;
    MZ: string;
    MY: string;
    MX: string;
    NL: string;
    NZ: string;
    PH: string;
    PK: string;
    PL: string;
    PT: string;
    RO: string;
    RU: string;
    SE: string;
    SL: string;
    SK: string;
    TH: string;
    TR: string;
    UA: string;
    US: string;
    ZA: string;
  };

  export type Tins = {
    AT: string;
    BE: string;
    BG: string;
    CY: string;
    CZ: string;
    DE: string;
    DK: string;
    EE: string;
    EL: string;
    ES: string;
    FI: string;
    FR: string;
    HR: string;
    HU: string;
    IE: string;
    IT: string;
    LT: string;
    LU: string;
    LV: string;
    MT: string;
    NL: string;
    PL: string;
    PT: string;
    RO: string;
    SE: string;
    SI: string;
    SK: string;
  };

  export type Vats = {
    AT: string;
    BE: string;
    BG: string;
    HR: string;
    CY: string;
    CZ: string;
    DK: string;
    EE: string;
    FI: string;
    FR: string;
    DE: string;
    EL: string;
    HU: string;
    IE: string;
    IT: string;
    LV: string;
    LT: string;
    LU: string;
    MT: string;
    NL: string;
    PL: string;
    RO: string;
    SK: string;
    SI: string;
    ES: string;
    SE: string;
    AL: string;
    MK: string;
    AU: string;
    BY: string;
    CA: string;
    IS: string;
    IN: string;
    ID: string;
    IL: string;
    KZ: string;
    NZ: string;
    NG: string;
    NO: string;
    PH: string;
    RU: string;
    SM: string;
    SA: string;
    RS: string;
    TR: string;
    UA: string;
    GB: string;
    UZ: string;
    AR: string;
    BO: string;
    BR: string;
    CL: string;
    CO: string;
    CR: string;
    EC: string;
    SV: string;
    GT: string;
    HN: string;
    MX: string;
    NI: string;
    PA: string;
    PY: string;
    PE: string;
    DO: string;
    UY: string;
    VE: string;
  };

  export type PhoneNumbers = {
    AM: string;
    AE: string;
    BH: string;
    DZ: string;
    LB: string;
    EG: string;
    IQ: string;
    JO: string;
    KW: string;
    LY: string;
    MA: string;
    OM: string;
    PS: string;
    SA: string;
    SD: string;
    SY: string;
    TN: string;
    AZ: string;
    BA: string;
    BY: string;
    BG: string;
    BD: string;
    AD: string;
    CZ: string;
    DK: string;
    DE: string;
    AT: string;
    CH: string;
    LU: string;
    MV: string;
    GR: string;
    CY: string;
    AI: string;
    AU: string;
    AG: string;
    BM: string;
    BS: string;
    GB: string;
    GG: string;
    GH: string;
    GY: string;
    HK: string;
    MO: string;
    IE: string;
    IN: string;
    JM: string;
    KE: string;
    CF: string;
    SS: string;
    KI: string;
    KN: string;
    LS: string;
    MT: string;
    MU: string;
    MW: string;
    NA: string;
    NG: string;
    NZ: string;
    PG: string;
    PK: string;
    PH: string;
    RW: string;
    SG: string;
    SL: string;
    TZ: string;
    UG: string;
    US: string;
    ZA: string;
    ZM: string;
    ZW: string;
    BW: string;
    AR: string;
    BO: string;
    CO: string;
    CL: string;
    CR: string;
    CU: string;
    DO: string;
    HN: string;
    EC: string;
    ES: string;
    PE: string;
    MX: string;
    NI: string;
    PA: string;
    PY: string;
    SV: string;
    UY: string;
    VE: string;
    EE: string;
    // IR:string;
    FI: string;
    FJ: string;
    FO: string;
    BF: string;
    BJ: string;
    CD: string;
    CM: string;
    FR: string;
    GF: string;
    GP: string;
    MQ: string;
    PF: string;
    RE: string;
    WF: string;
    IL: string;
    HU: string;
    ID: string;
    IR: string;
    IT: string;
    SM: string;
    JP: string;
    GE: string;
    KZ: string;
    GL: string;
    KR: string;
    KG: string;
    LT: string;
    LV: string;
    MG: string;
    MN: string;
    MM: string;
    MY: string;
    MZ: string;
    NO: string;
    NP: string;
    BE: string;
    NL: string;
    AW: string;
    PL: string;
    BR: string;
    PT: string;
    AO: string;
    MD: string;
    RO: string;
    RU: string;
    LK: string;
    SI: string;
    SK: string;
    SO: string;
    AL: string;
    RS: string;
    SE: string;
    TJ: string;
    TH: string;
    TR: string;
    TM: string;
    UA: string;
    UZ: string;
    VN: string;
    CN: string;
    TW: string;
    BT: string;
    YE: string;
    EH: string;
    AF: string;
  };

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
    S extends `${infer Prefix}_${infer Suffix}` ? `${Prefix}-${ReplaceUnderscoreWithHyphen<Suffix>}` : S;

  type LowercaseKeys<T> = {
    [K in keyof T as K extends string ? ReplaceUnderscoreWithHyphen<Lowercase<K>> : never]: T[K];
  };

  type CamelCase<T extends string> = T extends `${infer Before}_${infer Char}${infer After}`
    ? `${Lowercase<Before>}${Capitalize<Char>}${CamelCase<After>}`
    : Lowercase<T>;

  type CamelCaseKeys<T> = {
    [K in keyof T as CamelCase<string & K>]: T[K];
  };

  type PostalCodeTypes = {
    [K in keyof PostalCodes as `postal-code-${Lowercase<
      ReplaceUnderscoreWithHyphen<K>
    >}`]: string;
  };

  type IbansTypes = {
    [K in keyof Ibans as `iban-${Lowercase<
      ReplaceUnderscoreWithHyphen<K>
    >}`]: string;
  };

  type LicencePlatesTypes = {
    [K in keyof LicencePlates as `licence-plate-${Lowercase<
      ReplaceUnderscoreWithHyphen<K>
    >}`]: string;
  };

  type PassportNumbersTypes = {
    [K in keyof PassportNumbers as `passport-number-${Lowercase<
      ReplaceUnderscoreWithHyphen<K>
    >}`]: string;
  };

  type TinsTypes = {
    [K in keyof Tins as `tin-${Lowercase<
      ReplaceUnderscoreWithHyphen<K>
    >}`]: string;
  };

  type VatsTypes = {
    [K in keyof Vats as `vat-${Lowercase<
      ReplaceUnderscoreWithHyphen<K>
    >}`]: string;
  };

  type PhoneNumbersTypes = {
    [K in keyof PhoneNumbers as `phone-${Lowercase<
      ReplaceUnderscoreWithHyphen<K>
    >}`]: string;
  };

  type LowercaseKeysOfPatterns<T> = {
    [K in keyof T as K extends string ? Lowercase<K> : never]: T[K];
  };

  export type Types = LowercaseKeys<RegexPatterns>
    | PostalCodeTypes
    | IbansTypes
    | LicencePlatesTypes
    | PassportNumbersTypes
    | TinsTypes
    | VatsTypes
    | PhoneNumbersTypes;

  export type NativeTypes = "button"
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

  export type Type = NativeTypes
    | keyof LowercaseKeys<RegexPatterns>
    | keyof PostalCodeTypes
    | keyof IbansTypes
    | keyof LicencePlatesTypes
    | keyof PassportNumbersTypes
    | keyof TinsTypes
    | keyof VatsTypes
    | keyof PhoneNumbersTypes;

  export type Patterns = {
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
    postalCode: LowercaseKeysOfPatterns<PostalCodes>;
    iban: LowercaseKeysOfPatterns<Ibans>;
    licencePlate: LowercaseKeysOfPatterns<LicencePlates>;
    passportNumber: LowercaseKeysOfPatterns<PassportNumbers>;
    tin: LowercaseKeysOfPatterns<Tins>;
    vat: LowercaseKeysOfPatterns<Vats>;
    phone: LowercaseKeysOfPatterns<PhoneNumbers>;
  } & CamelCaseKeys<RegexPatterns>;

  export type InputPropsBase = {
    name: string;
    validation?: CustomValidityValue;
    label?: string;
    classes?: { field?: string; label?: string; error?: string };
    className?: string;
    mask?: string;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

  export type InputPropsWithType = InputPropsBase & {
    type: Type;
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
    classes?: { field?: string; label?: string; error?: string };
    className?: string;
  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

  export const Form: (props: FormProps) => any;

  export const Input: (props: InputProps) => any;

  export const Textarea: (props: TextareaProps) => any;

  export const useForm: (config: FormConfigParams) => FormConfig;

  export const connect: (config: FormConfigParams, type: Type) => object;

  export const patterns: Patterns;
}
