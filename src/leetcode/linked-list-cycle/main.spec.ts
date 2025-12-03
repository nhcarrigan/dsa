/**
 * @copyright NHCarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { linkedListCycle } from "./main.js";

class ListNode {
  public val:  number;
  public next: ListNode | null;

  public constructor(value = 0, next: ListNode | null = null) {
    this.val = value;
    this.next = next;
  }
}

describe("linkedListCycle", () => {
  it("should return true if there is a cycle in the linked list", () => {
    const cycleNode = new ListNode(2);
    const head = new ListNode(
      3,
      cycleNode,
    );
    cycleNode.next = new ListNode(0, new ListNode(-4, cycleNode));

    expect(linkedListCycle(head)).toBe(true);
  });

  it("should return false if there is no cycle in the linked list", () => {
    expect(linkedListCycle(new ListNode(1))).toBe(false);
  });
});
