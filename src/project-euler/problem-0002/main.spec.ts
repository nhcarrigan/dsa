/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { fiboEvenSum } from "./main.js";

describe("fiboEvenSum", () => {
  it(`should return the sum of the even-valued terms in the Fibonacci sequence below the limit`, () => {
    expect(fiboEvenSum(10)).toBe(10);
    expect(fiboEvenSum(8)).toBe(10);
    expect(fiboEvenSum(10)).toBe(10);
    expect(fiboEvenSum(34)).toBe(44);
    expect(fiboEvenSum(60)).toBe(44);
    expect(fiboEvenSum(1000)).toBe(798);
    expect(fiboEvenSum(100_000)).toBe(60_696);
    expect(fiboEvenSum(4_000_000)).toBe(4_613_732);
  });
});
