import patterns from "./regex";

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
  startsWith: (str) => `^${str}.*`,
  endsWith: (str) => `.*${str}$`,
  existIn: (array) =>
    `(${array
      .map((str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
  notExistIn: (array) =>
    `^(?!.*(${array
      .map((str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})).*$`,
  ...restTypes,
};
