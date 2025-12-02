/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, it, expect } from "vitest";
import { partOne, partTwo } from "./main.js";

const inputOne = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

describe("partOne", () => {
  it("should return the correct result", async() => {
    expect(partOne(inputOne)).toBe(1_227_775_554);
    const bigInput = await readFile(
      join(import.meta.dirname, "inputOne.txt"),
      "utf8",
    );
    expect(partOne(bigInput)).toBe(24_747_430_309);
  });
});

describe("partTwo", () => {
  it("should return the correct result", async() => {
    expect(partTwo(inputOne)).toBe(4_174_379_265);
    const bigInput = await readFile(
      join(import.meta.dirname, "inputOne.txt"),
      "utf8",
    );
    expect(partTwo(bigInput)).toBe(30_962_646_823);
  });
});
