import { useState } from 'react';

/**
 * Hook with useState that also stores changes in localStorage using a provided key.
 * 
 * @example
 * const [value, setValue] = useLocalStorage("localStorageKey", "defaultValue");
 */
export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (newValue: T | ((prevValue: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      if (storedValue === null) return defaultValue;
      return JSON.parse(storedValue);
    } else return defaultValue;
  });

  const setLocalStorageValue = (newValue: T | ((prevValue: T) => T)) => {
    if (typeof window !== 'undefined') {
      setValue((prev) => {
        const valueToStore =
          typeof newValue === 'function' ? (newValue as (prevValue: T) => T)(prev) : newValue;
        localStorage.setItem(key, JSON.stringify(valueToStore));
        return valueToStore;
      });
    }
  };

  return [value, setLocalStorageValue];
}
