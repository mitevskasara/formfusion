import { useReducer } from "react";
import reducer, { initialState } from "../state/reducer";
import ACTIONS from "../state/actions";

const useForm = (config) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, values: config?.initialValues });

  function setFieldValue(key, value) {
    const formData = new FormData(config.formRef?.current);
    formData.append(key, value);
    dispatch({ type: ACTIONS.SET_VALUES, payload: { [key]: value } });
  }

  function resetForm() {
    config.formRef?.current?.reset();
    if (Object.keys(state.values).length > 0) {
      dispatch({ type: ACTIONS.SET_VALUES, payload: {} });
      dispatch({ type: ACTIONS.SET_ERRORS, payload: {} });
      dispatch({ type: ACTIONS.SET_TOUCHED, payload: {} });
    }
  }

  return {
    ...state,
    ...config,
    formRef: config.formRef,
    setFieldValue,
    resetForm,
    state,
    dispatch
  };
};

export default useForm;
