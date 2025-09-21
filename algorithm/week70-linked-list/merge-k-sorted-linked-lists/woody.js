/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    if (!lists.length) return null;
    return this.mergeRange(lists, 0, lists.length - 1);
  }

  mergeRange(lists, leftIdx, rightIdx) {
    if (leftIdx === rightIdx) return lists[leftIdx]; // 한 리스트
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    const l1 = this.mergeRange(lists, leftIdx, midIdx);
    const l2 = this.mergeRange(lists, midIdx + 1, rightIdx);
    return this.mergeTwoLists(l1, l2);
  }

  mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let tail = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }

    tail.next = l1 || l2;
    return dummy.next;
  }
}
