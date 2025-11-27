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
 * Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of.
 * @param n - The integer to generate the FizzBuzz array for.
 * @returns An array of integers from 1 to n (inclusive), replacing numbers that are multiple of 3 with "Fizz", numbers that are multiple of 5 with "Buzz", and numbers that are multiple of both 3 and 5 with "FizzBuzz".
 * @see https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-25
 */
export const fizzBuzz = (
  n: number,
): Array<string | number> => {
  return Array.from({ length: n }, (_, index) => {
    return getString(index + 1);
  });
};
