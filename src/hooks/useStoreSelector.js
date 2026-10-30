import * as React from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function useStoreSelectorNative(store, selector) {
  const getSelection = () => selector(store.getState());
  return React.useSyncExternalStore(
    store.subscribe,
    getSelection,
    getSelection
  );
}

export function useStoreSelectorFallback(store, selector) {
  const [, forceRender] = React.useReducer((count) => count + 1, 0);
  const selection = selector(store.getState());
  const latest = React.useRef({ selector, selection });

  useIsomorphicLayoutEffect(() => {
    latest.current = { selector, selection };
  });

  useIsomorphicLayoutEffect(() => {
    const checkForUpdates = () => {
      const { selector, selection } = latest.current;
      if (!Object.is(selector(store.getState()), selection)) forceRender();
    };
    checkForUpdates();
    return store.subscribe(checkForUpdates);
  }, [store]);

  return selection;
}

const useStoreSelector = React.useSyncExternalStore
  ? useStoreSelectorNative
  : useStoreSelectorFallback;

export default useStoreSelector;
