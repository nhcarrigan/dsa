/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { countCharacters } from "./main.js";

describe("countCharacters", () => {
  it("should return the correct count of characters", () => {
    expect(countCharacters("hello world")).toStrictEqual([
      "d 1",
      "e 1",
      "h 1",
      "l 3",
      "o 2",
      "r 1",
      "w 1",
    ]);
    expect(countCharacters("I love coding challenges!")).toStrictEqual([
      "a 1",
      "c 2",
      "d 1",
      "e 3",
      "g 2",
      "h 1",
      "i 2",
      "l 3",
      "n 2",
      "o 2",
      "s 1",
      "v 1",
    ]);
    expect(
      countCharacters("// TODO: Complete this challenge ASAP!"),
    ).toStrictEqual([
      "a 3",
      "c 2",
      "d 1",
      "e 4",
      "g 1",
      "h 2",
      "i 1",
      "l 3",
      "m 1",
      "n 1",
      "o 3",
      "p 2",
      "s 2",
      "t 3",
    ]);
  });
});
