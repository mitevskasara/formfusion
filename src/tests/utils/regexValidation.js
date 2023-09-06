const isRegexPatternValid = (pattern) => {
  try {
    new RegExp(`^(?:${pattern})$`);
    return true;
  } catch (e) {
    return false;
  }
};

export default isRegexPatternValid;
