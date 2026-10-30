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

function validateField(e, customValidity, { errors, dispatch }) {
  e.preventDefault();
  const { name, value } = e.target;
  const dataset = e.target.dataset || {};
  const setCustomValidity =
    typeof e.target.setCustomValidity === 'function'
      ? (message) => e.target.setCustomValidity(message)
      : () => {};

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
    } else {
      setCustomValidity('');
    }
  }

  if (
    customValidity &&
    typeof customValidity === 'object' &&
    !patterns?.length
  ) {
    Object.keys(customValidity).map((key) => {
      if (e.target.validity?.[key]) {
        setCustomValidity(customValidity[key]);
      } else {
        setCustomValidity('');
      }
    });
  }

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
