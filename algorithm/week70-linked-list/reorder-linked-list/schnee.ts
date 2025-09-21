class Solution {
  reorderList(head: ListNode) {
    if (!head || !head.next) {
      return;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
      slow = slow!.next;
      fast = fast.next.next;
    }

    let second: ListNode | null = slow!.next;
    slow!.next = null;

    let prev: ListNode | null = null;
    while (second) {
      let tmp: ListNode | null = second.next;
      second.next = prev;
      prev = second;
      second = tmp;
    }

    let first: ListNode | null = head;
    second = prev;

    while (second) {
      let tmp1 = first!.next;
      let tmp2 = second.next;

      first!.next = second;
      second.next = tmp1;

      first = tmp1;
      second = tmp2;
    }
  }
}
