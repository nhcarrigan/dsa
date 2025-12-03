/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { merge } from "./main.js";

describe("merge", () => {
  it("should merge the two arrays", () => {
    const nums1 = [ 1, 2, 3, 0, 0, 0 ];
    const nums2 = [ 2, 5, 6 ];
    merge(nums1, nums2);
    expect(nums1).toStrictEqual([ 1, 2, 2, 3, 5, 6 ]);
  });

  it("should merge the two arrays when the first array is empty", () => {
    const nums1 = [ 0 ];
    const nums2 = [ 1 ];
    merge(nums1, nums2);
    expect(nums1).toStrictEqual([ 1 ]);
  });

  it("should merge the two arrays when the second array is empty", () => {
    const nums1 = [ 1, 2, 3, 0, 0, 0 ];
    const nums2 = [ 2, 5, 6 ];
    merge(nums1, nums2);
    expect(nums1).toStrictEqual([ 1, 2, 2, 3, 5, 6 ]);
  });
});
