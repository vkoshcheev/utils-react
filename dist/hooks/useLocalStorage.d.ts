/**
 * Hook with useState that also stores changes in localStorage using a provided key.
 *
 * @example
 * const [value, setValue] = useLocalStorage("localStorageKey", "defaultValue");
 */
export declare function useLocalStorage<T>(key: string, defaultValue: T): [T, (newValue: T | ((prevValue: T) => T)) => void];
