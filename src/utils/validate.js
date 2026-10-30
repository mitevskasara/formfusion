import ACTIONS from '../state/actions';
import maskInput from './mask';
import { CombineOperators } from './combine';

function matchesPatterns(patterns, operator, value) {
  const test = (pattern) => {
    try {
      return new RegExp(`^(?:${pattern})$`).test(value);
    } catch (_error) {
      return false;
    }
  };

  switch (operator) {
    case CombineOperators.OR:
      return patterns.some(test);
    case CombineOperators.NOR:
      return patterns.every((pattern) => !test(pattern));
    case CombineOperators.AND:
    default:
      return patterns.every(test);
  }
}

export function updateValidity(target, customValidity) {
  const { value } = target;
  const dataset = target.dataset || {};
  const setCustomValidity =
    typeof target.setCustomValidity === 'function'
      ? (message) => target.setCustomValidity(message)
      : () => {};

  setCustomValidity('');

  let patterns = [];
  try {
    patterns = dataset.pattern ? JSON.parse(dataset.pattern) : [];
  } catch (_error) {
    patterns = [];
  }

  if (Array.isArray(patterns) && patterns.length > 0) {
    const operator = dataset.operator || CombineOperators.AND;

    if (!matchesPatterns(patterns, operator, value)) {
      setCustomValidity(
        customValidity?.patternMismatch ||
          customValidity?.invalid ||
          'Invalid field.'
      );
    }
    return;
  }

  if (customValidity && typeof customValidity === 'object') {
    const failingCheck = Object.keys(customValidity).find(
      (key) => target.validity?.[key]
    );
    if (failingCheck) setCustomValidity(customValidity[failingCheck]);
  }
}

function validateField(e, customValidity, { errors, dispatch }) {
  e.preventDefault();
  const { name, value } = e.target;
  const dataset = e.target.dataset || {};

  updateValidity(e.target, customValidity);

  const valid = Boolean(e.target.validity?.valid);

  if (!valid || errors?.[name]) {
    dispatch({
      type: ACTIONS.SET_ERRORS,
      payload: { [name]: valid ? '' : e.target.validationMessage },
    });
  }

  if (dataset.mask) {
    e.target.value = maskInput(dataset.mask, value);
  }
}

export function resetValidity(form) {
  Array.from(form?.elements ?? []).forEach((element) =>
    element.setCustomValidity?.('')
  );
}

export default validateField;
