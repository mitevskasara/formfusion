import postalCodes from "./data/postalCodes";
import ibans from "./data/ibans";
import licencePlates from "./data/licencePlates";
import passportNumbers from "./data/passportNumbers";
import tins from "./data/tins";
import vats from "./data/vats";
import phones from "./data/phones";
import patterns from "./regex";

const postalCodeTypes = {};
Object.keys(postalCodes).map((key) =>
  Object.assign(postalCodeTypes, {
    [key.toLowerCase()]: postalCodes[key],
  }),
);
const ibanTypes = {};
Object.keys(ibans).map((key) =>
  Object.assign(ibanTypes, {
    [key.toLowerCase()]: ibans[key],
  }),
);
const licencePlateTypes = {};
Object.keys(licencePlates).map((key) =>
  Object.assign(licencePlateTypes, {
    [key.toLowerCase()]: licencePlates[key],
  }),
);
const passportNumberTypes = {};
Object.keys(passportNumbers).map((key) =>
  Object.assign(passportNumberTypes, {
    [key.toLowerCase()]: passportNumbers[key],
  }),
);
const tinTypes = {};
Object.keys(tins).map((key) =>
  Object.assign(tinTypes, {
    [key.toLowerCase()]: tins[key],
  }),
);
const vatTypes = {};
Object.keys(vats).map((key) =>
  Object.assign(vatTypes, {
    [key.toLowerCase()]: vats[key],
  }),
);
const phoneTypes = {};
Object.keys(phones).map((key) =>
  Object.assign(phoneTypes, {
    [key.toLowerCase().replace(/_(.)/g, (_, letter) => letter.toUpperCase())]:
      phones[key],
  }),
);
const restTypes = {};
Object.keys(patterns).map((key) =>
  Object.assign(restTypes, {
    [key.toLowerCase().replace(/_(.)/g, (_, letter) => letter.toUpperCase())]:
      patterns[key],
  }),
);

export default {
  length: (length) => `^.{${length}}$`,
  minCharacters: (length) => `^.{${length},}$`,
  maxCharacters: (length) => `^.{0,${length}}$`,
  charactersRange: (from, to) => `^.{${from},${to}}$`,
  numberOfLetters: (length) => `^[a-zA-Z]{${length}}$`,
  minLetters: (length) => `^(.*[a-zA-Z].*){${length},}$`,
  maxLetters: (length) => `^(?!(.*[a-zA-Z].*){0,${length + 1}}).*$`,
  lettersRange: (from, to) =>
    `^(?=(?:[^\\d]*\\d*[a-zA-Z]){${from},})(?!.*[a-zA-Z]{${to + 1},}).*$`,
  contains: (str) => `.*${str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}.*`,
  equals: (str) => `^${str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`,
  existIn: (array) =>
    `(${array
      .map((str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
  notExistIn: (array) =>
    `^(?!.*(${array
      .map((str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})).*$`,
  ...restTypes,
  postalCode: {
    ...postalCodeTypes,
  },
  iban: {
    ...ibanTypes,
  },
  licencePlate: {
    ...licencePlateTypes,
  },
  passportNumber: {
    ...passportNumberTypes,
  },
  tin: {
    ...tinTypes,
  },
  vat: {
    ...vatTypes,
  },
  phone: {
    ...phoneTypes,
  },
};
