/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { fizzBuzz } from "./main.js";

describe("fizzBuzz", () => {
  it("should return the correct FizzBuzz array", () => {
    expect(fizzBuzz(2)).toStrictEqual([ 1, 2 ]);
    expect(fizzBuzz(4)).toStrictEqual([ 1, 2, "Fizz", 4 ]);
    expect(fizzBuzz(8)).
      toStrictEqual([ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8 ]);
    expect(fizzBuzz(20)).toStrictEqual([
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
    ]);
    expect(fizzBuzz(50)).toStrictEqual([
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
    ]);
  });
});
