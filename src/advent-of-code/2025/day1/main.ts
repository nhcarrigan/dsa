/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

const normalizePosition = (value: number): number => {
  const modulus = value % 100;
  return (modulus + 100) % 100;
};
const countZeroHits = (start: number, end: number): number => {
  if (end === start) {
    return 0;
  }
  if (end > start) {
    return Math.floor(end / 100) - Math.floor(start / 100);
  }
  return Math.floor((start - 1) / 100) - Math.floor((end - 1) / 100);
};

/**
 * Part one of the Advent of Code 2025 day 1 challenge.
 * @param input - The input string.
 * @returns The number of times the position is 0.
 * @see https://adventofcode.com/2025/day/1
 */
const partOne = (input: string): number => {
  const instructions = input.split("\n").map((line) => {
    return [ line[0], line.slice(1) ];
  });
  let position = 50;
  let count = 0;
  for (const instruction of instructions) {
    const [ direction, distance ] = instruction;
    if (direction === "L") {
      position = position - Number(distance);
    } else {
      position = position + Number(distance);
    }
    position = normalizePosition(position);
    if (position === 0) {
      count = count + 1;
    }
  }
  return count;
};

/**
 * Part two of the Advent of Code 2025 day 1 challenge.
 * @param input - The input string.
 * @returns The number of times the position passed through 0.
 * @see https://adventofcode.com/2025/day/1
 */
const partTwo = (input: string): number => {
  const instructions = input.split("\n").map((line) => {
    return [ line[0], line.slice(1) ];
  });
  let position = 50;
  let count = 0;
  for (const instruction of instructions) {
    const [ direction, distance ] = instruction;
    const delta = direction === "L"
      ? -Number(distance)
      : Number(distance);
    const endPosition = position + delta;
    count = count + countZeroHits(position, endPosition);
    position = normalizePosition(endPosition);
  }
  return count;
};

export { partOne, partTwo };
