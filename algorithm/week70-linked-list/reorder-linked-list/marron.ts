class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   */
  reorderList(head: { val: number; next: ListNode | null }) {
    if (!head) return;

    const nodes: { val: number; next: ListNode | null }[] = [];
    let cur = head;

    while (cur) {
      nodes.push(cur);
      cur = cur.next;
    }

    let i = 0;
    let j = nodes.length - 1;
    while (i < j) {
      nodes[i].next = nodes[j];
      i++;
      if (i >= j) {
        break;
      }
      nodes[j].next = nodes[i];
      j--;
    }

    nodes[i].next = null;
  }
}
