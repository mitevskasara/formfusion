import patterns from './regex';

const restTypes = {};
Object.keys(patterns).map((key) =>
  Object.assign(restTypes, {
    [key.toLowerCase().replace(/_/g, '-')]: patterns[key],
  })
);

export default {
  ...restTypes,
};
