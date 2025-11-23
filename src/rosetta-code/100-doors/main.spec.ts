/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { getFinalOpenedDoors } from "./main.js";

describe("getFinalOpenedDoors", () => {
  it("should return the final state of the doors", () => {
    expect(getFinalOpenedDoors(100)).toStrictEqual([
      1, 4, 9, 16, 25, 36, 49, 64, 81, 100,
    ]);
  });
});
