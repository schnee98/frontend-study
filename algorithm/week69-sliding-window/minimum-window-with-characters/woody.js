class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (t.length === 0) return "";

    // t 안에 있는 문자와 그 필요한 개수를 저장한 맵
    const need = new Map();
    for (const ch of t) need.set(ch, (need.get(ch) || 0) + 1);

    // 윈도우(슬라이딩 창) 안에 있는 문자들이 need의 조건을 충족한 문자 종류 수
    const needCount = need.size;
    let have = 0;

    // 최소 구간의 시작과 끝 인덱스를 저장 (결과값)
    let res = [-1, -1];
    let resLen = Infinity;

    // 슬라이딩 윈도우 좌/우 포인터
    let left = 0;

    // 오른쪽 포인터를 한 칸씩 옮기면서 윈도우 확장
    for (let right = 0; right < s.length; right++) {
      const c = s[right];

      if (need.has(c)) {
        need.set(c, need.get(c) - 1);
        if (need.get(c) === 0) have++;
      }

      // 현재 윈도우가 모든 필요한 문자들을 충족하면(모든 distinct 문자 만족)
      while (have === needCount) {
        // 현재 윈도우가 최소인지 확인하고 갱신
        if (right - left + 1 < resLen) {
          res = [left, right];
          resLen = right - left + 1;
        }

        // 윈도우를 줄이기 위해 왼쪽 문자 제거 시도
        const cl = s[left];
        if (need.has(cl)) {
          need.set(cl, need.get(cl) + 1);
          if (need.get(cl) > 0) have--;
        }

        left++;
      }
    }

    return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
  }
}
