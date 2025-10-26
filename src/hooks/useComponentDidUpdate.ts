import { useEffect, useRef } from 'react';

type Callback<T> = (prevDeps: T, currentDeps: T) => void;

/**
 * Hook that functions identically to useEffect but **does not** trigger on first render.
 */
export function useComponentDidUpdate<T extends ReadonlyArray<unknown>>(callback: Callback<T>, deps: T) {
  const ref = useRef({ isComponentMounted: false });
  const prevDeps = useRef(deps);

  useEffect(() => {
    if (!ref.current.isComponentMounted) {
      ref.current.isComponentMounted = true;
    } else {
      callback(prevDeps.current, deps);
      prevDeps.current = deps;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current.isComponentMounted = false;
    }
  }, [])
  
  return ref.current.isComponentMounted;
};
