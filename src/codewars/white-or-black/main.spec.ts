/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { mineColor } from "./main.js";

describe("mineColor", () => {
  it("should return white if the square is white", () => {
    expect(mineColor("a", 8)).toBe("white");
    expect(mineColor("f", 5)).toBe("white");
  });

  it("should return black if the square is black", () => {
    expect(mineColor("b", 2)).toBe("black");
  });

  it("should handle empty strings", () => {
    expect(mineColor("", 1)).toBe("white");
  });
});
