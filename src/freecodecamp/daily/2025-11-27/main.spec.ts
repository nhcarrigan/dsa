/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * 1. CalculateAge("2000-11-20") should return 25.
 * 2. CalculateAge("2000-12-01") should return 24.
 * 3. CalculateAge("2014-10-25") should return 11.
 * 4. CalculateAge("1994-01-06") should return 31.
 * 5. CalculateAge("1994-12-14") should return 30.
 */

import { describe, it, expect } from "vitest";
import { calculateAge } from "./main.js";

describe("calculateAge", () => {
  it("should return the correct result", () => {
    expect(calculateAge("2000-11-20")).toBe(25);
    expect(calculateAge("2000-12-01")).toBe(24);
    expect(calculateAge("2014-10-25")).toBe(11);
    expect(calculateAge("1994-01-06")).toBe(31);
    expect(calculateAge("1994-12-14")).toBe(30);
  });

  it("should throw an error if the birthday date is invalid", () => {
    expect(() => {
      return calculateAge("");
    }).toThrow(TypeError);
    expect(() => {
      return calculateAge("2000");
    }).toThrow(TypeError);
    expect(() => {
      return calculateAge("2000-11");
    }).toThrow(TypeError);
    expect(() => {
      return calculateAge("a-11-11");
    }).toThrow(TypeError);
    expect(() => {
      return calculateAge("11-b-11");
    }).toThrow(TypeError);
    expect(() => {
      return calculateAge("11-11-c");
    }).toThrow(TypeError);
    expect(() => {
      return calculateAge("11-11-11-dfjdalkjfs");
    }).toThrow(TypeError);
  });
});
