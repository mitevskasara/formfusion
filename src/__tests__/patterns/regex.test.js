import patterns from '../../constants/regex';
import isRegexPatternValid from '../utils/regexValidation';

test.each(Object.entries(patterns))(
  'Validating regex pattern %s as browsers compile it',
  (_name, pattern) => {
    expect(isRegexPatternValid(pattern)).toBe(true);
  }
);
