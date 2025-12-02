/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, it, expect } from "vitest";
import { partOne, partTwo } from "./main.js";

const inputOne = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
R0`;

describe("partOne", () => {
  it("should return the correct result", async() => {
    expect(partOne(inputOne)).toBe(3);
    const bigInput = await readFile(
      join(import.meta.dirname, "inputOne.txt"),
      "utf8",
    );
    expect(partOne(bigInput)).toBe(1086);
  });
});

describe("partTwo", () => {
  it("should return the correct result", async() => {
    expect(partTwo(inputOne)).toBe(6);
    const bigInput = await readFile(
      join(import.meta.dirname, "inputOne.txt"),
      "utf8",
    );
    expect(partTwo(bigInput)).toBe(6268);
  });
});
