/* eslint-disable no-eval -- We're being lazy with the maths. */
/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Generates all permutations of an array using Heap's algorithm.
 * @param array - The array to generate permutations for.
 * @returns An array containing all permutations of the input array.
 */
const getPermutations = <T>(array: Array<T>): Array<Array<T>> => {
  const permutations: Array<Array<T>> = [];
  const permute = (currentArray: Array<T>, m: number): void => {
    if (m === 1) {
      permutations.push([ ...currentArray ]);
    } else {
      for (let index = 0; index < m; index = index + 1) {
        permute(currentArray, m - 1);
        if (m % 2 === 1) {
          // Swap first and last
          const [ first, last ] = [ currentArray[0], currentArray[m - 1] ];
          if (first !== undefined && last !== undefined) {
            currentArray[0] = last;
            currentArray[m - 1] = first;
          }
        } else {
          // Swap current index and last
          const [ current, last ]
          = [ currentArray[index], currentArray[m - 1] ];
          if (current !== undefined && last !== undefined) {
            currentArray[index] = last;
            currentArray[m - 1] = current;
          }
        }
      }
    }
  };
  permute([ ...array ], array.length);
  return permutations;
};

/**
 * The 24 Game tests a person's mental arithmetic.
 * The aim of the game is to arrange four numbers in a way that when evaluated, the result is 24
 * Implement a function that takes a string of four digits as its argument, with each digit from 1 to 9 (inclusive) with repetitions allowed, and returns an arithmetic expression that evaluates to the number 24. If no such solution exists, return "no solution exists".
 * Rules:
 * - Only the following operators/functions are allowed: multiplication, division, addition, subtraction.
 * - Division should use floating point or rational arithmetic, etc, to preserve remainders.
 * - Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
 * - The order of the digits when given does not have to be preserved.
 * @param numberString - The string of four digits to solve the 24 game for.
 * @returns The arithmetic expression that evaluates to the number 24.
 * @see https://www.freecodecamp.org/learn/rosetta-code/rosetta-code-challenges/24-game
 */
const solve24 = (numberString: string): string => {
  // Number array
  const numbers = [ ...numberString ].map(Number);
  // Operator array
  const operators = [ "+", "-", "*", "/" ];
  const numberPermutations = getPermutations(numbers);
  for (const numberPermutation of numberPermutations) {
    let opOne = 0;
    let opTwo = 0;
    let opThree = 0;
    while (opOne < operators.length) {
      while (opTwo < operators.length) {
        while (opThree < operators.length) {
          const twoPairsString = [
            "(",
            numberPermutation[0],
            operators[opOne],
            numberPermutation[1],
            ")",
            operators[opTwo],
            "(",
            numberPermutation[2],
            operators[opThree],
            numberPermutation[3],
            ")",
          ].join("");
          const leftAssociativeString = [
            "(",
            "(",
            numberPermutation[0],
            operators[opOne],
            numberPermutation[1],
            ")",
            operators[opTwo],
            numberPermutation[2],
            ")",
            operators[opThree],
            numberPermutation[3],
          ].join("");
          const rightAssociativeString = [
            numberPermutation[0],
            operators[opOne],
            "(",
            numberPermutation[1],
            operators[opTwo],
            "(",
            numberPermutation[2],
            operators[opThree],
            numberPermutation[3],
            ")",
            ")",
          ].join("");
          const mixedOneString = [
            "(",
            numberPermutation[0],
            operators[opOne],
            "(",
            numberPermutation[1],
            operators[opTwo],
            numberPermutation[2],
            ")",
            ")",
            operators[opThree],
            numberPermutation[3],
          ].join("");
          const mixedTwoString = [
            numberPermutation[0],
            operators[opOne],
            "(",
            "(",
            numberPermutation[1],
            operators[opTwo],
            numberPermutation[2],
            ")",
            operators[opThree],
            numberPermutation[3],
            ")",
          ].join("");
          try {
            const twoPairs: unknown = eval(twoPairsString);
            if (
              typeof twoPairs === "number"
              && !Number.isNaN(twoPairs)
              && Number.isFinite(twoPairs)
              && Math.abs(Number(twoPairs) - 24) < 1e-6
            ) {
              return twoPairsString;
            }
          } catch {
            // Division by zero or other error, skip
          }
          try {
            const leftAssociative: unknown = eval(leftAssociativeString);
            if (
              typeof leftAssociative === "number"
              && !Number.isNaN(leftAssociative)
              && Number.isFinite(leftAssociative)
              && Math.abs(Number(leftAssociative) - 24) < 1e-6
            ) {
              return leftAssociativeString;
            }
          } catch {
            // Division by zero or other error, skip
          }
          try {
            const rightAssociative: unknown = eval(rightAssociativeString);
            if (
              typeof rightAssociative === "number"
              && !Number.isNaN(rightAssociative)
              && Number.isFinite(rightAssociative)
              && Math.abs(Number(rightAssociative) - 24) < 1e-6
            ) {
              return rightAssociativeString;
            }
          } catch {
            // Division by zero or other error, skip
          }
          try {
            const mixedOne: unknown = eval(mixedOneString);
            if (
              typeof mixedOne === "number"
              && !Number.isNaN(mixedOne)
              && Number.isFinite(mixedOne)
              && Math.abs(Number(mixedOne) - 24) < 1e-6
            ) {
              return mixedOneString;
            }
          } catch {
            // Division by zero or other error, skip
          }
          try {
            const mixedTwo: unknown = eval(mixedTwoString);
            if (
              typeof mixedTwo === "number"
              && !Number.isNaN(mixedTwo)
              && Number.isFinite(mixedTwo)
              && Math.abs(Number(mixedTwo) - 24) < 1e-6
            ) {
              return mixedTwoString;
            }
          } catch {
            // Division by zero or other error, skip
          }
          opThree = opThree + 1;
        }
        opThree = 0;
        opTwo = opTwo + 1;
      }
      opTwo = 0;
      opThree = 0;
      opOne = opOne + 1;
    }
  }
  return "no solution exists";
};

export { getPermutations, solve24 };
