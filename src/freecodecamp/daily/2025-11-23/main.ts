/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Given a sentence string, return an array with a count of each character in alphabetical order.
 * @param sentence - The sentence to count the characters in.
 * @returns An object with the number of characters in the sentence.
 * @see https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-23
 */
export const countCharacters = (sentence: string): Array<string> => {
  return Object.entries([ ...sentence.toLowerCase().replaceAll(/[^a-z]/g, "") ].
    reduce((accumulator, char): Record<string, number> => {
      accumulator[char] = (accumulator[char] ?? 0) + 1;
      return accumulator;
    }, {})).
    map(([ char, count ]) => {
      return `${char} ${count.toString()}`;
    }).
    sort((a, b) => {
      return a.localeCompare(b);
    });
};
