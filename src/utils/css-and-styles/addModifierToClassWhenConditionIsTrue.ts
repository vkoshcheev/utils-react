import { addModifierToClass } from "./addModifierToClass";

/**
 * @example
 * addModifierToClassWhenConditionIsTrue("class", "--modifier", condition);
 * outputs: "class class--modifier"
 */
export const addModifierToClassWhenConditionIsTrue = (
  className: string,
  condition: boolean,
  modifier = '--selected',
) => {
  return condition ? addModifierToClass(className, modifier) : className;
};