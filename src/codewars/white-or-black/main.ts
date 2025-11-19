/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Determines the color of a square on a chessboard based on its column and row.
 * @param column - The column of the square, represented as a letter ('a'-'h').
 * @param row - The row of the square, represented as a number (1-8).
 * @returns The color of the square, either "white" or "black".
 * @see https://www.codewars.com/kata/563319974612f4fa3f0000e0
 */
const mineColor = (column: string, row: number): string => {
  // Convert column letter ('a'-'h') to a number (1-8)
  const columnNumber
    = (column.toLowerCase().codePointAt(0) ?? 0)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, stylistic/no-mixed-operators -- "a" clearly has a code point at index 0. We're mixing operators because this is an old solution.
      - ("a".codePointAt(0)!) + 1;

  // If the sum of column number and row is even, it's white
  if ((columnNumber + row) % 2 !== 0) {
    return "white";
  }
  return "black";
};

export { mineColor };
