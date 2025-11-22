/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Given an array of recipe ingredients and a number to scale the recipe, return an array with the quantities scaled accordingly.
 * @param recipe - The recipe to scale.
 * @param scale - The scale to apply to the recipe.
 * @returns The scaled recipe.
 * @see https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-22
 */
export const scaleRecipe
  = (recipe: Array<string>, scale: number): Array<string> => {
    return recipe.map((ingredient) => {
      const [ quantity, ...unit ] = ingredient.split(" ");
      return `${(Number(quantity) * scale).toString()} ${unit.join(" ")}`;
    });
  };
