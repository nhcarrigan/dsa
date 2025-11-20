/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Given a sentence string, return the longest word in the sentence.
 * @param sentence - The sentence to find the longest word in.
 * @returns The longest word in the sentence.
 * @see https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-20
 */
const longestWord = (sentence: string): string => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- We know the array will not be empty.
  return sentence.split(" ").map((word) => {
    return word.replaceAll(/[^A-Za-z]/g, "");
  }).
    sort((a, b) => {
      return b.length - a.length;
    })[0]!;
};

export { longestWord };
