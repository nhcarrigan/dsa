/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { mutation } from "./main.js";

describe("mutation", () => {
  it("should return the correct result", () => {
    expect(mutation([ "hello", "hey" ])).toBe(false);
    expect(mutation([ "hello", "Hello" ])).toBe(true);
    expect(mutation([ "zyxwvutsrqponmlkjihgfedcba", "qrstu" ])).toBe(true);
    expect(mutation([ "Mary", "Army" ])).toBe(true);
    expect(mutation([ "Mary", "Aarmy" ])).toBe(true);
    expect(mutation([ "Alien", "line" ])).toBe(true);
    expect(mutation([ "floor", "for" ])).toBe(true);
    expect(mutation([ "hello", "neo" ])).toBe(false);
    expect(mutation([ "voodoo", "no" ])).toBe(false);
    expect(mutation([ "ate", "date" ])).toBe(false);
    expect(mutation([ "Tiger", "Zebra" ])).toBe(false);
    expect(mutation([ "Noel", "Ole" ])).toBe(true);
  });
});
