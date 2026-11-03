const isRegexPatternValid = (pattern) => {
  try {
    new RegExp(`^(?:${pattern})$`, 'v');
    return true;
  } catch (_error) {
    return false;
  }
};

export default isRegexPatternValid;
