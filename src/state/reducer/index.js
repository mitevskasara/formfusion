import actions from '../actions';

export const initialState = {
  values: {},
  errors: {},
  touched: {},
};

function mergeSlice(slice, payload) {
  const current = slice ?? {};
  const keys = Object.keys(payload);

  if (keys.length === 0) {
    return Object.keys(current).length === 0 ? current : payload;
  }

  const unchanged = keys.every(
    (key) => key in current && Object.is(current[key], payload[key])
  );

  return unchanged ? current : { ...current, ...payload };
}

function replaceSlice(slice, next) {
  const current = slice ?? {};
  const keys = Object.keys(next);
  const unchanged =
    keys.length === Object.keys(current).length &&
    keys.every((key) => key in current && Object.is(current[key], next[key]));

  return unchanged ? current : next;
}

function resetState(state, initialValues) {
  const values = replaceSlice(state.values, initialValues ?? {});
  const errors = replaceSlice(state.errors, {});
  const touched = replaceSlice(state.touched, {});

  return values === state.values &&
    errors === state.errors &&
    touched === state.touched
    ? state
    : { ...state, values, errors, touched };
}

function updateSlice(state, key, payload) {
  const slice = mergeSlice(state[key], payload);
  return slice === state[key] ? state : { ...state, [key]: slice };
}

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_VALUES:
      return updateSlice(state, 'values', action.payload);
    case actions.SET_ERRORS:
      return updateSlice(state, 'errors', action.payload);
    case actions.SET_TOUCHED:
      return updateSlice(state, 'touched', action.payload);
    case actions.RESET:
      return resetState(state, action.payload);
  }
  throw Error('Unknown action: ' + action.type);
}

export default reducer;
