/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

const gcd = (firstNumber: number, secondNumber: number): number => {
    return secondNumber === 0 ? firstNumber : gcd(secondNumber, firstNumber % secondNumber);
};

/**
 * Given two integers, return the least common multiple (LCM) of the two numbers.
 * @param firstNumber - The first integer.
 * @param secondNumber - The second integer.
 * @returns The least common multiple (LCM) of the two numbers.
 * @see https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-21
 */
export const lcm = (firstNumber: number, secondNumber: number): number => {
    return (firstNumber * secondNumber) / gcd(firstNumber, secondNumber);
}
