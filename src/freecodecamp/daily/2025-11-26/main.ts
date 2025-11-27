/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

const getString = (number: number): string | number => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
  if (number % 3 === 0) {
    return "Fizz";
  }
  if (number % 5 === 0) {
    return "Buzz";
  }
  return number;
};

/**
 * Given an array, determine if it is a correct FizzBuzz sequence from 1 to the last item in the array.
 * @param array - The array to check if it is a correct FizzBuzz sequence.
 * @returns True if the array is a correct FizzBuzz sequence, false otherwise.
 * @see https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-26
 */
export const isFizzBuzz = (
  array: Array<string | number>,
): boolean => {
  return array.every((item, index) => {
    return item === getString(index + 1);
  });
};
