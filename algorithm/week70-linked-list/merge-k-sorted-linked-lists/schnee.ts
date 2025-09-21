class Solution {
  mergeKLists(lists) {
    if (lists.length === 0) {
      return null;
    }

    return this.mergeRange(lists, 0, lists.length - 1);
  }

  mergeRange(lists: ListNode[], left: number, right: number) {
    if (left === right) {
      return lists[left];
    }

    const mid = Math.floor((left + right) / 2);
    const l1 = this.mergeRange(lists, left, mid);
    const l2 = this.mergeRange(lists, mid + 1, right);
    return this.mergeTwoLists(l1, l2);
  }

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
