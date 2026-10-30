const isRegexPatternValid = (pattern) => {
  try {
    new RegExp(`^(?:${pattern})$`);
    return true;
  } catch (_error) {
    return false;
  }
};

export default isRegexPatternValid;
