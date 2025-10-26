/**
 * Hook made for Next.JS for determining whether component is currently used in a browser or backend.
 *
 * @returns boolean
 *
 * @example
 * const isClient = useIsClient();
 * if (!isClient) return null;
 */
export declare function useIsClient(): boolean;
