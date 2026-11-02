import useStoreSelector from './useStoreSelector';

const useFormState = (form, selector) => useStoreSelector(form.store, selector);

export default useFormState;
