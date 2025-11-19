/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Given a string representing a Markdown heading, return the equivalent HTML heading.
 * @param heading - The Markdown heading to convert.
 * @returns The equivalent HTML heading.
 * @see https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-19
 */
const convert = (heading: string): string => {
  if (!/^\s*#{1,6}\s+/.test(heading)) {
    return "Invalid format";
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- We know the regex will match and the group will be present.
  const level = /^\s*(?<level>#{1,6})\s+/.exec(heading)!.groups!.level!.length;
  return `<h${level.toString()}>${heading.replace(/^\s*#{1,6}\s+/, "").trim()}</h${level.toString()}>`;
};

export { convert };
