class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists: ListNode[]) {
    let nodes = [];

    for (let list of lists) {
      while (list) {
        nodes.push(list.val);
        list = list.next;
      }
    }
    nodes.sort((a, b) => a - b);

    let res = new ListNode(0);
    let cur = res;
    for (let node of nodes) {
      cur.next = new ListNode(node);
      cur = cur.next;
    }
    return res.next;
  }
}
