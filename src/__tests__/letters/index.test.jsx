import patterns from '../../constants/patterns';
import isRegexPatternValid from '../utils/regexValidation';

const matches = (pattern, value) =>
  new RegExp(`^(?:${pattern})$`, 'v').test(value);

describe('Testing validity of the letter-count patterns', () => {
  test('Validating regex patterns', () => {
    expect(isRegexPatternValid(patterns.maxLetters(3))).toBe(true);
    expect(isRegexPatternValid(patterns.lettersRange(2, 4))).toBe(true);
  });

  test.each([
    ['', true],
    ['12', true],
    ['a1b2c', true],
    ['abcd', false],
    ['a1b2c3d', false],
  ])('maxLetters(3), value: %s, validity %s', (value, valid) => {
    expect(matches(patterns.maxLetters(3), value)).toBe(valid);
  });

  test.each([
    ['ab', true],
    ['a1b2c3d', true],
    ['a12', false],
    ['ab1cd2e', false],
  ])('lettersRange(2, 4), value: %s, validity %s', (value, valid) => {
    expect(matches(patterns.lettersRange(2, 4), value)).toBe(valid);
  });
});
