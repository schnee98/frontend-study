class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(
    list1: { val: number; next: ListNode | null },
    list2: { val: number; next: ListNode | null }
  ) {
    const dummy = new ListNode();
    let cur = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        cur.next = list1;
        list1 = list1.next;
      } else {
        cur.next = list2;
        list2 = list2.next;
      }
      cur = cur.next;
    }
    if (list1) {
      cur.next = list1;
    } else {
      cur.next = list2;
    }
    return dummy.next;
  }
}
