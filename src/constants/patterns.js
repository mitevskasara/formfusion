import patterns from './regex';

const restTypes = {};
Object.keys(patterns).map((key) =>
  Object.assign(restTypes, {
    [key.toLowerCase().replace(/_(.)/g, (_, letter) => letter.toUpperCase())]:
      patterns[key],
  })
);

const escape = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export default {
  length: (length) => `^.{${length}}$`,
  minCharacters: (length) => `^.{${length},}$`,
  maxCharacters: (length) => `^.{0,${length}}$`,
  charactersRange: (from, to) => `^.{${from},${to}}$`,
  numberOfLetters: (length) => `^[a-zA-Z]{${length}}$`,
  minLetters: (length) => `^(.*[a-zA-Z].*){${length},}$`,
  maxLetters: (length) => `^(?!(?:[^a-zA-Z]*[a-zA-Z]){${length + 1}}).*$`,
  lettersRange: (from, to) =>
    `^(?=(?:[^a-zA-Z]*[a-zA-Z]){${from}})(?!(?:[^a-zA-Z]*[a-zA-Z]){${to + 1}}).*$`,
  contains: (str) => `.*${escape(str)}.*`,
  equals: (str) => `^${escape(str)}$`,
  startsWith: (str) => `^${escape(str)}.*`,
  endsWith: (str) => `.*${escape(str)}$`,
  existIn: (array) => `(${array.map(escape).join('|')})`,
  notExistIn: (array) => `^(?!.*(${array.map(escape).join('|')})).*$`,
  ...restTypes,
};
