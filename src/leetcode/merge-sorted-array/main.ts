/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

/**
 * Mutates the first array to merge the second array into it.
 * Returns nothing because LeetCode fucking wants you to mutate a param which is a terrible terrible idea.
 * @param nums1 - The first array to merge into.
 * @param nums2 - The second array to merge into the first.
 * @see https://leetcode.com/problems/merge-sorted-array
 */
const merge = (nums1: Array<number>, nums2: Array<number>): void => {
  while (nums2.length > 0) {
    nums1.pop();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- We assert it is not undefined immediately above this. But because we cannot use a variable, TypeScript doesn't narrow the type.
    nums1.unshift(nums2.pop()!);
  }
  nums1.sort((a, b) => {
    return a - b;
  });
};

export { merge };
