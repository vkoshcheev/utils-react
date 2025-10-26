/**
 * Adds opacity to hex color.
*/
export const withOpacity = (hexColor: string, alpha = 1) => {
  const [r, g, b] = hexColor.match(/\w\w/g)?.map(x => parseInt(x, 16))!;
  return `rgba(${r},${g},${b},${alpha})`;
};