/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { convert } from "./main.js";

describe("convert", () => {
  it("should return the correct heading", () => {
    expect(convert("# My level 1 heading")).toBe("<h1>My level 1 heading</h1>");
    expect(convert("My heading")).toBe("Invalid format");
    expect(convert("##### My level 5 heading")).toBe(
      "<h5>My level 5 heading</h5>",
    );
    expect(convert("#My heading")).toBe("Invalid format");
    expect(convert("  ###  My level 3 heading")).toBe(
      "<h3>My level 3 heading</h3>",
    );
    expect(convert("####### My level 7 heading")).toBe("Invalid format");
    expect(convert("## My #2 heading")).toBe("<h2>My #2 heading</h2>");
  });
});
