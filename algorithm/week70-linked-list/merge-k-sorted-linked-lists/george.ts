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
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists: ListNode[]): ListNode | null {
    const nodes: number[] = [];
    for (let lst of lists) {
      while (lst) {
        nodes.push(lst.val);
        lst = lst.next!;
      }
    }
    nodes.sort((a, b) => a - b);

    const dummy = new ListNode(0);
    let current = dummy;
    for (const node of nodes) {
      current.next = new ListNode(node);
      current = current.next;
    }
    return dummy.next;
  }
}
