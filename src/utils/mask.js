function maskInput(mask, value) {
  const charArray = value.replace(new RegExp(`[${mask.match(/[^#]/g).join('')}]`, 'g'), '').split('');

  let masked = '';
  let charIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === '#') {
      if (charIndex < charArray.length) {
        masked += charArray[charIndex++];
      }
    } else if (value[i]) {
      masked += mask[i];
    }
  }

  return masked;
}

export default maskInput;
