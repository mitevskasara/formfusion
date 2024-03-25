import actions from "../actions";

export const initialState = {
  values: {},
  errors: {},
  touched: {},
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_VALUES: {
      return {
        ...state,
        values:
          Object.keys(action.payload).length > 0
            ? {
                ...state.values,
                ...action.payload,
              }
            : action.payload,
      };
    }
    case actions.SET_ERRORS: {
      return {
        ...state,
        errors:
          Object.keys(action.payload).length > 0
            ? {
                ...state.errors,
                ...action.payload,
              }
            : action.payload,
      };
    }
    case actions.SET_TOUCHED: {
      return {
        ...state,
        touched:
          Object.keys(action.payload).length > 0
            ? {
                ...state.touched,
                ...action.payload,
              }
            : action.payload,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export default reducer;
