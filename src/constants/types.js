import inputTypes from "./patterns";
import postalCodes from "./postalCodes";

const postalCodeTypes = {};
Object.keys(postalCodes).map((key) =>
  Object.assign(postalCodeTypes, {
    [key.toLowerCase()]: postalCodes[key],
  }),
);

export default {
  ...inputTypes,
  creditCardNumber: inputTypes["credit-card-number"],
  creditCardNumberHyphen: inputTypes["credit-card-number-hyphen"],
  creditCardNumberSpace: inputTypes["credit-card-number-space"],
  ccvAmex: inputTypes["ccv-amex"],
  postalCode: {
    ...postalCodeTypes,
  },
  minCharacters: (length) => `^.{${length},}$`,
  maxCharacters: (length) => `^.{0,${length}}$`,
  charactersRange: (from, to) => `^.{${from},${to}}$`,
  minLetters: (length) => `^(.*[a-zA-Z].*){${length},}$`,
  maxLetters: (length) => `^(?!(.*[a-zA-Z].*){${length + 1},}).*$`,
  lettersRange: (from, to) =>
    `^(?=(?:[^\\d]*\\d*[a-zA-Z]){${from},})(?!.*[a-zA-Z]{${to + 1},}).*$`,
};
