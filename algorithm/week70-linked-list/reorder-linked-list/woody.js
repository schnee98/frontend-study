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
   * @param {ListNode} head
   * @return {void}
   */
  reorderList(head) {
    // 링크드 리스트를 배열로 변환
    const nodes = [];
    let curr = head;
    while (curr) {
      nodes.push(curr);
      curr = curr.next;
    }

    const n = nodes.length;
    // const n = head.length; // x
    const result = [];

    for (let i = 0; i < Math.floor(n / 2); i++) {
      result.push(nodes[i]);
      result.push(nodes[n - 1 - i]);
    }

    if (n % 2 === 1) {
      result.push(nodes[Math.floor(n / 2)]);
    }

    // 다시 연결
    for (let i = 0; i < result.length - 1; i++) {
      result[i].next = result[i + 1];
    }
    result[result.length - 1].next = null;

    return result;
  }
}

/*
class Solution {
  reorderList(head) {
      // 1. 중간 찾기
      let slow = head;
      let fast = head;
      while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
      }

      // 2. 뒤쪽 절반 뒤집기 
      let prev = null;
      let curr = slow.next;
      slow.next = null; // 앞, 뒤 분리
      while (curr) {
          let next = curr.next;
          curr.next = prev;
          prev = curr;
          curr = next;
      }

      // 3. 병합하기
      let first = head;
      let second = prev;
      while (second) {
          let tmp1 = first.next;
          let tmp2 = second.next;

          first.next = second;
          second.next = tmp1;

          first = tmp1;
          second = tmp2;
      }
  }
}
*/
