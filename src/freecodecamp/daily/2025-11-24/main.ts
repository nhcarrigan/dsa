/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Given a message string and a validation string, determine if the message is valid.
 * @param message - The message to validate.
 * @param validator - The validator to use.
 * @returns True if the message is valid, false otherwise.
 * @see https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-24
 */
export const validateMessage = (
  message: string,
  validator: string,
): boolean => {
  const messageLetters = message.
    toLowerCase().
    split(/\s+/g).
    map((word) => {
      return word[0];
    });
  const validatorLetters = [ ...validator.toLowerCase() ];
  return messageLetters.every((letter, index) => {
    return letter === validatorLetters[index];
  }) && messageLetters.length === validatorLetters.length;
};
