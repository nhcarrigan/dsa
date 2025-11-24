/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { validateMessage } from "./main.js";

describe("validateMessage", () => {
  it("should return the correct validation result", () => {
    expect(validateMessage("hello world", "hw")).toBe(true);
    expect(validateMessage("ALL CAPITAL LETTERS", "acl")).toBe(true);
    expect(validateMessage("Coding challenge are boring.", "cca")).toBe(false);
    expect(
      validateMessage(
        "The quick brown fox jumps over the lazy dog.",
        "TQBFJOTLD",
      ),
    ).toBe(true);
    expect(
      validateMessage(
        "The quick brown fox jumps over the lazy dog.",
        "TQBFJOTLDT",
      ),
    ).toBe(false);
  });
});
