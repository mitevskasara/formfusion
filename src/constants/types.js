import postalCodes from "./postalCodes";
import patterns from "./regex";

const postalCodeTypes = {};
Object.keys(postalCodes).map((key) =>
  Object.assign(postalCodeTypes, {
    [`postal-code-${key.toLowerCase()}`]: postalCodes[key],
  }),
);

export default {
  email: patterns.EMAIL,
  password: patterns.PASSWORD,
  search: patterns.SEARCH,
  url: patterns.URL,
  tel: patterns.TEL,
  alphanumeric: patterns.ALPHANUMERIC,
  alphabetic: patterns.ALPHABETIC,
  numeric: patterns.NUMERIC,
  username: patterns.USERNAME,
  "credit-card-number": patterns.CREDIT_CARD_NUMBER_BASIC,
  "credit-card-number-hyphen": patterns.CREDIT_CARD_NUMBER_HYPHEN,
  "credit-card-number-space": patterns.CREDIT_CARD_NUMBER_SPACE,
  ccv: patterns.CCV,
  "ccv-amex": patterns.CCV_AMEX,
  ipv4: patterns.IPV4,
  ipv6: patterns.IPV6,
  uuid: patterns.UUID,
  guid: patterns.GUID,
  ssn: patterns.SSN,
  ...postalCodeTypes,
};
