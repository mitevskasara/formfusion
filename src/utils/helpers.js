import maskInput from '../utils/mask';

const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

function setValue(values, key, value) {
  Object.defineProperty(values, key, {
    value,
    writable: true,
    enumerable: true,
    configurable: true,
  });
}

export function getFormValues(form, storeValues = {}) {
  const values = {};
  for (const [key, value] of new FormData(form)) {
    setValue(
      values,
      key,
      hasOwn(values, key) ? [].concat(values[key], value) : value
    );
  }
  for (const key of Object.keys(storeValues)) {
    setValue(values, key, storeValues[key]);
  }
  return values;
}

export function onPaste(e) {
  const { dataset } = e.target;
  let paste = (e.clipboardData || window.clipboardData).getData('text');
  const mask = dataset.mask;
  if (mask) {
    e.target.value = maskInput(mask, paste);
  }
}
