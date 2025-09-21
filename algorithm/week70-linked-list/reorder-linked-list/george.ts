/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

export class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   */
  reorderList(head: ListNode | null): void {
    if (!head) return;

    const nodes: ListNode[] = [];
    let current: ListNode | null = head;

    while (current) {
      nodes.push(current);
      current = current.next;
    }

    let left = 0;
    let right = nodes.length - 1;

    while (left < right) {
      nodes[left].next = nodes[right];
      left++;

      if (left >= right) break;

      nodes[right].next = nodes[left];
      right--;
    }

    nodes[left].next = null;
  }
}
