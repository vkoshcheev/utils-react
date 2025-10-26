/**
 * @example
 * addModifierToClass("class", "--modifier");
 * outputs: "class class--modifier"
 */
export const addModifierToClass = (
  className: string,
  modifier: string,
) => {
  return `${className} ${className}${modifier}`;
};