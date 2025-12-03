/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * WE CANNOT REARRANGE THE DIGITS!
 * @param bank - The bank of digits.
 * @param count - The number of digits to keep.
 * @returns The highest joltage that can be produced.
 */
const findHighestJoltage = (bank: string, count: number): number => {
  // Edge case: If we want more digits than available, it's impossible. This does not happen in the input, so we do not need to test for it.
  // eslint-disable-next-line capitalized-comments -- We need this comment syntax for coverage.
  /* v8 ignore if -- @preserve */
  if (count > bank.length) {
    return 0;
  }

  const stack: Array<string> = [];
  // Calculate how many digits we are allowed to "skip" to find a better one.
  let digitsToDrop = bank.length - count;

  for (const digit of bank) {
    while (
      stack.length > 0
      && stack.at(-1) !== undefined
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- We assert it is not undefined immediately above this. But because we cannot use a variable, TypeScript doesn't narrow the type.
      && stack.at(-1)! < digit
      && digitsToDrop > 0
    ) {
      stack.pop();
      digitsToDrop = digitsToDrop - 1;
    }
    stack.push(digit);
  }
  const resultString = stack.slice(0, count).join("");
  return Number(resultString);
};

/**
 * Part one of the Advent of Code 2025 day 3 challenge.
 * @param input - The input string.
 * @returns Dunno.
 * @see https://adventofcode.com/2025/day/3
 */
const partOne = (input: string): number => {
  const banks = input.split("\n");
  return banks.reduce((sum, bank) => {
    return sum + findHighestJoltage(bank, 2);
  }, 0);
};

/**
 * Part two of the Advent of Code 2025 day 3 challenge.
 * @param input - The input string.
 * @returns Dunno.
 * @see https://adventofcode.com/2025/day/3
 */
const partTwo = (input: string): number => {
  const banks = input.split("\n");
  return banks.reduce((sum, bank) => {
    return sum + findHighestJoltage(bank, 12);
  }, 0);
};

export { partOne, partTwo };
