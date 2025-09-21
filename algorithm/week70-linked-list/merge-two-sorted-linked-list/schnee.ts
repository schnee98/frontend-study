class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution1 {
  mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {
    const first = new ListNode();
    let node = first;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }
      node = node.next;
    }

    if (list1) {
      node.next = list1;
    } else {
      node.next = list2;
    }

    return first.next;
  }
}
