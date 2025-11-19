/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Compares two strings to see if they are equal when both are typed into empty text editors.
 * '#' means a backspace character.
 * @param s - The first string to compare.
 * @param t - The second string to compare.
 * @returns True if the strings are equal, false otherwise.
 * @see https://leetcode.com/problems/backspace-string-compare/description/
 */
const backspaceCompare = (s: string, t: string): boolean => {
  let sIndex = s.length - 1;
  let tIndex = t.length - 1;
  let sSkips = 0;
  let tSkips = 0;

  while (sIndex >= 0 || tIndex >= 0) {
    while (sIndex >= 0) {
      if (s[sIndex] === "#") {
        sSkips = sSkips + 1;
        sIndex = sIndex - 1;
      } else if (sSkips > 0) {
        sSkips = sSkips - 1;
        sIndex = sIndex - 1;
      } else {
        break;
      }
    }
    while (tIndex >= 0) {
      if (t[tIndex] === "#") {
        tSkips = tSkips + 1;
        tIndex = tIndex - 1;
      } else if (tSkips > 0) {
        tSkips = tSkips - 1;
        tIndex = tIndex - 1;
      } else {
        break;
      }
    }
    if (s[sIndex] !== t[tIndex]) {
      return false;
    }
    sIndex = sIndex - 1;
    tIndex = tIndex - 1;
  }
  return true;
};

export { backspaceCompare };
