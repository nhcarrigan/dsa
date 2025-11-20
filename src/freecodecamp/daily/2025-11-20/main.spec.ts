/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { longestWord } from "./main.js";

describe("longestWord", () => {
  it("should return the correct longest word", () => {
    expect(longestWord("The quick red fox")).toBe("quick");
    expect(longestWord("Hello coding challenge.")).toBe("challenge");
    expect(longestWord("Do Try This At Home.")).toBe("This");
    expect(
      longestWord(
        "This sentence... has commas, ellipses, and an exlamation point!",
      ),
    ).toBe("exlamation");
    expect(longestWord("A tie? No way!")).toBe("tie");
    expect(longestWord("Wouldn't you like to know.")).toBe("Wouldnt");
  });
});
