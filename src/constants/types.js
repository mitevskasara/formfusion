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
    [`postal-code-${key.toLowerCase()}`]: postalCodes[key],
  }),
);
const ibanTypes = {};
Object.keys(ibans).map((key) =>
  Object.assign(ibanTypes, {
    [`iban-${key.toLowerCase()}`]: ibans[key],
  }),
);
const licencePlateTypes = {};
Object.keys(licencePlates).map((key) =>
  Object.assign(licencePlateTypes, {
    [`licence-plate-${key.toLowerCase()}`]: licencePlates[key],
  }),
);
const passportNumberTypes = {};
Object.keys(passportNumbers).map((key) =>
  Object.assign(passportNumberTypes, {
    [`passport-number-${key.toLowerCase()}`]: passportNumbers[key],
  }),
);
const tinTypes = {};
Object.keys(tins).map((key) =>
  Object.assign(tinTypes, {
    [`tin-${key.toLowerCase()}`]: tins[key],
  }),
);
const vatTypes = {};
Object.keys(vats).map((key) =>
  Object.assign(vatTypes, {
    [`vat-${key.toLowerCase()}`]: vats[key],
  }),
);
const phoneTypes = {};
Object.keys(phones).map((key) =>
  Object.assign(phoneTypes, {
    [`phone-${key.toLowerCase()}`]: phones[key],
  }),
);
const restTypes = {};
Object.keys(patterns).map((key) =>
  Object.assign(restTypes, {
    [key.toLowerCase().replaceAll("_", "-")]: patterns[key],
  }),
);

export default {
  ...restTypes,
  ...postalCodeTypes,
  ...ibanTypes,
  ...licencePlateTypes,
  ...passportNumberTypes,
  ...tinTypes,
  ...vatTypes,
  ...phoneTypes,
};
