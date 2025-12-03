/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, it, expect } from "vitest";
import { partOne, partTwo } from "./main.js";

const inputOne = `987654321111111
811111111111119
234234234234278
818181911112111`;

describe("partOne", () => {
  it("should return the correct result", async() => {
    expect(partOne(inputOne)).toBe(357);
    const bigInput = await readFile(
      join(import.meta.dirname, "inputOne.txt"),
      "utf8",
    );
    expect(partOne(bigInput)).toBe(17_087);
  });
});

describe("partTwo", () => {
  it("should return the correct result", async() => {
    expect(partTwo(inputOne)).toBe(3_121_910_778_619);
    const bigInput = await readFile(
      join(import.meta.dirname, "inputOne.txt"),
      "utf8",
    );
    expect(partTwo(bigInput)).toBe(169_019_504_359_949);
  });
});
