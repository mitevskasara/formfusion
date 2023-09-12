import postalCodes from "./postalCodes";
import patterns from './regex';

const postalCodeTypes = {};
Object.keys(postalCodes).map((key) =>
  Object.assign(postalCodeTypes, {
    [key.toLowerCase()]: postalCodes[key],
  }),
);

export default {
  minCharacters: (length) => `^.{${length},}$`,
  maxCharacters: (length) => `^.{0,${length}}$`,
  charactersRange: (from, to) => `^.{${from},${to}}$`,
  minLetters: (length) => `^(.*[a-zA-Z].*){${length},}$`,
  maxLetters: (length) => `^(?!(.*[a-zA-Z].*){${length + 1},}).*$`,
  lettersRange: (from, to) =>
    `^(?=(?:[^\\d]*\\d*[a-zA-Z]){${from},})(?!.*[a-zA-Z]{${to + 1},}).*$`,
  email: patterns.EMAIL,
  password: patterns.PASSWORD,
  search: patterns.SEARCH,
  url: patterns.URL,
  tel: patterns.TEL,
  alphanumeric: patterns.ALPHANUMERIC,
  alphabetic: patterns.ALPHABETIC,
  numeric: patterns.NUMERIC,
  username: patterns.USERNAME,
  ccv: patterns.CCV,
  ipv4: patterns.IPV4,
  ipv6: patterns.IPV6,
  uuid: patterns.UUID,
  guid: patterns.GUID,
  ssn: patterns.SSN,
  creditCardNumber: patterns.CREDIT_CARD_NUMBER_BASIC,
  creditCardNumberHyphen: patterns.CREDIT_CARD_NUMBER_HYPHEN,
  creditCardNumberSpace: patterns.CREDIT_CARD_NUMBER_SPACE,
  ccvAmex: patterns.CCV_AMEX,
  postalCode: {
    ...postalCodeTypes,
  }
};
