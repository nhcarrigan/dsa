/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
 *
 * Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.
 * @param numberOfDoors - The number of doors to consider.
 * @returns The final state of the doors.
 * @see https://www.freecodecamp.org/learn/rosetta-code/rosetta-code-challenges/100-doors
 */
export const getFinalOpenedDoors = (numberOfDoors: number): Array<number> => {
  const doors = Array.from({ length: numberOfDoors }, () => {
    return false;
  });
  let pass = 1;
  while (pass <= numberOfDoors) {
    for (const [ index, door ] of doors.entries()) {
      if ((index + 1) % pass === 0) {
        doors[index] = !door;
      }
    }
    pass = pass + 1;
  }
  return doors.map((door, index) => {
    return door
      ? index + 1
      : null;
  }).filter((door) => {
    return door !== null;
  });
};
