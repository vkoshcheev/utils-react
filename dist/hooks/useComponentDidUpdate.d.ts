type Callback<T> = (prevDeps: T, currentDeps: T) => void;
/**
 * Hook that functions identically to useEffect but **does not** trigger on first render.
 */
export declare function useComponentDidUpdate<T extends ReadonlyArray<unknown>>(callback: Callback<T>, deps: T): boolean;
export {};
