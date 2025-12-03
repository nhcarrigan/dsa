/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { doThing } from "./main.js";

describe("mineColor", () => {
  it("should do the thing", () => {
    expect(doThing()).toBe(true);
  });
});
