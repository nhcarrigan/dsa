/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Determine the sum of invalid IDs in a range.
 * An ID is invalid if it consists of two pairs of repeating digits.
 * @param start - The start of the range.
 * @param end - The end of the range.
 * @returns The sum of invalid IDs in the range.
 * @example 998-1012 has one invalid ID, 1010.
 * @example 1188511880-1188511890 has one invalid ID, 1188511888.
 */
const sumInvalidIds = (start: number, end: number): number => {
  let sum = 0;
  for (let index = start; index <= end; index = index + 1) {
    const id = index.toString();
    const { length } = id;
    if (length % 2 !== 0) {
      continue;
    }
    const half = length / 2;
    const firstHalf = id.slice(0, half);
    const secondHalf = id.slice(half);
    if (firstHalf === secondHalf) {
      sum = sum + index;
    }
  }
  return sum;
};

const sumLongerInvalidIds = (start: number, end: number): number => {
  let sum = 0;
  for (let index = start; index <= end; index = index + 1) {
    const id = index.toString();
    // Regex to detect if string consists ONLY of two or more groups of repeated digits, like 121212.
    if (/^(?<name>[\d\s]+)\1+$/.test(id)) {
      sum = sum + index;
    }
  }
  return sum;
};

/**
 * Part one of the Advent of Code 2025 day 2 challenge.
 * @param input - The input string.
 * @returns The sum of invalid IDs.
 * @see https://adventofcode.com/2025/day/2
 */
const partOne = (input: string): number => {
  const idRanges: Array<[number, number]> = input.split(",").map((range) => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- We know the input is valid.
    return range.split("-").map(Number) as [number, number];
  });
  return idRanges.reduce((sum, [ start, end ]) => {
    return sum + sumInvalidIds(start, end);
  }, 0);
};

/**
 * Part two of the Advent of Code 2025 day 1 challenge.
 * @param input - The input string.
 * @returns The number of times the position passed through 0.
 * @see https://adventofcode.com/2025/day/1
 */
const partTwo = (input: string): number => {
  const idRanges: Array<[number, number]> = input.split(",").map((range) => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- We know the input is valid.
    return range.split("-").map(Number) as [number, number];
  });
  return idRanges.reduce((sum, [ start, end ]) => {
    return sum + sumLongerInvalidIds(start, end);
  }, 0);
};

export { partOne, partTwo };
