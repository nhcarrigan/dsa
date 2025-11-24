/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Determines if the second string can be constructed from only the letters found in the first string.
 * @param array - An array containing two strings.
 * @param array."0" - The first string.
 * @param array."1" - The second string.
 * @returns True if the second string can be constructed from only the letters found in the first string, false otherwise.
 * @see https://www.freecodecamp.org/learn/javascript-v9/lab-mutations/implement-the-mutations-algorithm
 */
export const mutation = ([ first, second ]: [ string, string ]): boolean => {
  return [ ...second.
    toLowerCase() ].
    every((letter) => {
      return first.toLowerCase().includes(letter);
    });
};
