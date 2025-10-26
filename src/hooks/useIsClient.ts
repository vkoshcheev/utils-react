import { useEffect, useState } from 'react';

/**
 * Hook made for Next.JS for determining whether component is currently used in a browser or backend.
 *
 * @returns boolean
 *
 * @example
 * const isClient = useIsClient();
 * if (!isClient) return null;
 */
export function useIsClient(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}