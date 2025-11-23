/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { multiplesOf3Or5 } from "./main.js";

describe("multiplesOf3Or5", () => {
  it(`should return the sum of all the multiples of 3 or 5 below the limit`, () => {
    expect(multiplesOf3Or5(10)).toBe(23);
    expect(multiplesOf3Or5(49)).toBe(543);
    expect(multiplesOf3Or5(1000)).toBe(233_168);
    expect(multiplesOf3Or5(8456)).toBe(16_687_353);
    expect(multiplesOf3Or5(19_564)).toBe(89_301_183);
  });
});
