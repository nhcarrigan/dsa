/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { backspaceCompare } from "./main.js";

describe("backspaceCompare", () => {
  it("should return true if the strings are equal", () => {
    expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
    expect(backspaceCompare("ab##", "c#d#")).toBe(true);
  });

  it("should return false if the strings are not equal", () => {
    expect(backspaceCompare("ab#c", "b")).toBe(false);
  });
});
