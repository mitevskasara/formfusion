function escapeForCharClass(str) {
  return str.replace(/[.*+?^${}()|[\]\\-]/g, '\\$&');
}

function maskInput(mask, value) {
  if (typeof mask !== 'string') return value == null ? '' : String(value);

  const stringValue = value == null ? '' : String(value);
  const literals = (mask.match(/[^#]/g) || []).join('');
  const charArray = (
    literals
      ? stringValue.replace(
          new RegExp(`[${escapeForCharClass(literals)}]`, 'g'),
          ''
        )
      : stringValue
  ).split('');

  let masked = '';
  let charIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === '#') {
      if (charIndex < charArray.length) {
        masked += charArray[charIndex++];
      }
    } else if (stringValue[i]) {
      masked += mask[i];
    }
  }

  return masked;
}

export default maskInput;
