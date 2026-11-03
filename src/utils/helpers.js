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

export function getFormValues(form, storeValues, controlled) {
  const values = {};
  for (const [key, value] of new FormData(form)) {
    setValue(
      values,
      key,
      hasOwn(values, key) ? [].concat(values[key], value) : value
    );
  }
  if (controlled) {
    for (const key of Object.keys(storeValues)) {
      setValue(values, key, storeValues[key]);
    }
  }
  for (const element of form.elements) {
    if (element.dataset?.multiple) {
      setValue(values, element.name, storeValues[element.name] ?? []);
    }
  }
  return values;
}

export function callAll(...handlers) {
  const defined = handlers.filter(Boolean);
  return defined.length > 0
    ? (e) => defined.forEach((handler) => handler(e))
    : undefined;
}

export function onPaste(e) {
  const { dataset } = e.target;
  let paste = (e.clipboardData || window.clipboardData).getData('text');
  const mask = dataset.mask;
  if (mask) {
    e.target.value = maskInput(mask, paste);
  }
}
