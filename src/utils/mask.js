function maskInput(mask, value) {
  const placeholder = /#/;
  const charArray = value.split("").filter(char => placeholder.test(char));

  let masked = "";
  let charIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === "#") {
      if (charIndex < charArray.length) {
        masked += charArray[charIndex++];
      }
    } else {
      masked += mask[i];
    }
  }

  return masked;
}

export default maskInput;
