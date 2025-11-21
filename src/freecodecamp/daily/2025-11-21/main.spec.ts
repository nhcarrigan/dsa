/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { lcm } from "./main.js";

describe("lcm", () => {
    it("should return the correct LCM", () => {
        expect(lcm(4, 6)).toBe(12);
        expect(lcm(9, 6)).toBe(18);
        expect(lcm(10, 100)).toBe(100);
        expect(lcm(13, 17)).toBe(221);
        expect(lcm(45, 70)).toBe(630);
    });
});