/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { isFizzBuzz } from "./main.js";

describe("isFizzBuzz", () => {
  it("should return the correct result", () => {
    expect(isFizzBuzz([ 1, 2, "Fizz", 4 ])).toBe(true);
    expect(isFizzBuzz([ 1, 2, 3, 4 ])).toBe(false);
    expect(isFizzBuzz([ 1, 2, "Fizz", 4, "Buzz", 7 ])).toBe(false);
    expect(
      isFizzBuzz([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        "FizzBuzz",
      ]),
    ).toBe(false);
    expect(
      isFizzBuzz([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        "Fizz",
      ]),
    ).toBe(false);
    expect(
      isFizzBuzz([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        "Buzz",
      ]),
    ).toBe(false);
    expect(
      isFizzBuzz([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
        16,
        17,
        "Fizz",
        19,
        "Buzz",
        "Fizz",
        22,
        23,
        "Fizz",
        "Buzz",
        26,
        "Fizz",
        28,
        29,
        "FizzBuzz",
        31,
        32,
        "Fizz",
        34,
        "Buzz",
        "Fizz",
        37,
        38,
        "Fizz",
        "Buzz",
        41,
        "Fizz",
        43,
        44,
        "FizzBuzz",
        46,
        47,
        "Fizz",
        49,
        "Buzz",
      ]),
    ).toBe(true);
  });
});
