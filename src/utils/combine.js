export const CombineOperators = {
  AND: 'and',
  OR: 'or',
  NOR: 'nor',
};

export const combine = {
  and: (...args) => {
    return { patterns: args, operator: CombineOperators.AND };
  },
  or: (...args) => {
    return { patterns: args, operator: CombineOperators.OR };
  },
  nor: (...args) => {
    return { patterns: args, operator: CombineOperators.NOR };
  },
};

export default combine;
