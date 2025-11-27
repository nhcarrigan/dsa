/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.
 * @param birthday - The date of someone's birthday in the format YYYY-MM-DD.
 * @returns The person's age as of November 27th, 2025.
 * @throws {TypeError} If the birthday date is invalid.
 * @see https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-27
 */
export const calculateAge = (birthday: string): number => {
  const [ year, month, day ] = birthday.split("-").map(Number);
  if (
    year === undefined
    || month === undefined
    || day === undefined
    || Number.isNaN(year)
    || Number.isNaN(month)
    || Number.isNaN(day)
  ) {
    throw new TypeError("Invalid birthday date");
  }

  const parsed = new Date(`${birthday}T00:00:00Z`);
  if (
    Number.isNaN(parsed.getTime())
    || parsed.getUTCFullYear() !== year
    || parsed.getUTCMonth() + 1 !== month
    || parsed.getUTCDate() !== day
  ) {
    throw new TypeError("Invalid birthday date");
  }

  const referenceYear = 2025;
  const referenceMonth = 11;
  const referenceDay = 27;

  const isLaterMonth = month > referenceMonth;
  const isSameMonth = month === referenceMonth;
  const isLaterDay = day > referenceDay;
  const isLaterDayInSameMonth = isSameMonth && isLaterDay;
  const hasUpcomingBirthday = isLaterMonth || isLaterDayInSameMonth;
  const birthdayAdjustment = hasUpcomingBirthday
    ? 1
    : 0;

  return referenceYear - year - birthdayAdjustment;
};
