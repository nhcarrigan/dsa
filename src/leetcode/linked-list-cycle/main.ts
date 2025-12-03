/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

class ListNode {
  public val:  number;
  public next: ListNode | null;
  // eslint-disable-next-line capitalized-comments -- We need this for coverage.
  /* v8 ignore next -- @preserve */
  public constructor(value = 0, next: ListNode | null = null) {
    // eslint-disable-next-line capitalized-comments -- We need this for coverage.
    /* v8 ignore next -- @preserve */
    this.val = value;
    // eslint-disable-next-line capitalized-comments -- We need this for coverage.
    /* v8 ignore next -- @preserve */
    this.next = next;
  }
}

/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * @param head - The head node of the linked list.
 * @returns True if there is a cycle in the linked list, false otherwise.
 * @see https://leetcode.com/problems/linked-list-cycle/description/
 */
const linkedListCycle = (head: ListNode): boolean => {
  const seen = new Set<ListNode>();
  let current: ListNode | null = head;
  while (current !== null) {
    if (seen.has(current)) {
      return true;
    }
    seen.add(current);
    current = current.next ?? null;
  }
  return false;
};

export { linkedListCycle };
