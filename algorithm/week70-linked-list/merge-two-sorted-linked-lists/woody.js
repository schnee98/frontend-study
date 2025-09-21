class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  mergeTwoLists(list1, list2) {
    // 더미 노드 생성
    const dummy = new ListNode(0);
    let tail = dummy; // tail: 결과 리스트 마지막 노드

    // 둘 다 남아있을 때 비교하면서 이어붙임
    while (list1 && list2) {
      if (list1.val < list2.val) {
        tail.next = list1; // tail 뒤에 list1 노드 붙이기
        list1 = list1.next; // list1 포인터 이동
      } else {
        tail.next = list2; // tail 뒤에 list2 노드 붙이기
        list2 = list2.next; // list2 포인터 이동
      }
      tail = tail.next; // tail 포인터 마지막으로 이동
    }

    // 남은 노드 붙이기
    if (list1) tail.next = list1;
    else tail.next = list2;

    // 더미 다음 노드가 실제 결과 리스트 시작
    return dummy.next;
  }
}
