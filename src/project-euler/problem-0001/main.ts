/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * @param limit - The limit to find the multiples of 3 or 5 below.
 * @returns The sum of all the multiples of 3 or 5 below the limit.
 * @see https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-1-multiples-of-3-or-5
 */
export const multiplesOf3Or5 = (limit: number): number => {
  return Array.from({ length: limit }, (_, index) => {
    return index;
  }).filter((number) => {
    return number % 3 === 0 || number % 5 === 0;
  }).
    reduce((sum, number) => {
      return sum + number;
    }, 0);
};
