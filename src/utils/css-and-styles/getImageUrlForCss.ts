/**
 * @returns `url("${input}")`
 * 
 * @example
 * getImageUrlForCss("https://example.com/test.jpg");
 * outputs: "url(https://example.com/test.jpg)"
 */
export const getImageUrlForCss = (input: string) => {
  return `url("${input}")`;
}