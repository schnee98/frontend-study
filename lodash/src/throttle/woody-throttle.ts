interface ThrottleOptions {
  leading?: boolean; // 시작 시점 실행 여부
  trailing?: boolean; // 끝 시점 실행 여부
  maxWait?: number; // 최대 대기 시간
}

interface DebouncedFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  cancel(): void; // 대기 중인 즉시 실행 취소
  flush(): ReturnType<T> | undefined; // 즉시 실행
}

const FUNC_ERROR_TEXT = "Expected a function";

function isObject(value) {
  const type = typeof value;
  return (
    value !== null &&
    value !== undefined &&
    (type === "object" || type === "function")
  );
}

/**
  [options={}] (Object): The options object.
  [options.leading=false] (boolean): true이면 대기 시간(wait) 시작 시점(leading edge)에 함수를 한 번 실행.
  [options.maxWait] (number): 호출이 너무 계속 지연되지 않도록, 이 시간 이상 지연되면 무조건 실행.
  [options.trailing=true] (boolean): true이면 대기 시간 끝 시점(trailing edge)에 함수를 실행.
  참고: 대기 시간 끝 시점(trailing edge)에 함수를 실행하는 것은 대기 시간 시작 시점(leading edge)에 함수를 실행하는 것과 동일합니다.
 */
function debounce<T extends (...args: any) => any>(
  func: T,
  wait?: number,
  options?: ThrottleOptions
): DebouncedFunc<T> {
  let leading = false;
  let maxWait: number | undefined;
  let maxing = false;
  let trailing = true;

  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = Number(wait) || 0;

  if (options && isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? Math.max(Number(options?.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options?.trailing : trailing;
  }

  let timerId: NodeJS.Timeout | undefined; // 타이머 ID
  let lastInvokeTime = 0; // 마지막 실행 시간
  let lastCallTime: number | undefined; // 마지막 호출 시간
  let lastArgs: Parameters<T> | undefined; // 마지막 호출 인수 (인수 배열)
  let lastThis: any; // 마지막 호출 컨텍스트 (this)
  let result: ReturnType<T> | undefined; // 마지막 실행 결과 (반환값)

  /** 즉시 함수 실행 */
  function invokeFunc(time: number) {
    const args = lastArgs;
    const thisArg = lastThis;

    lastArgs = lastThis = undefined; // 사용 후 즉시 정리 (메모리 누수 방지)
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  /*
  시간축: ----A----B----C----D----[n초 후]----
        ↑                              ↑
    leading edge                 trailing edge
  */

  /** 대기 시간 시작 시점(leading edge) 처리
   * 첫 번째 호출이거나, 이전 throttle주기가 완전히 끝난 후 새로운 호출
   */
  function leadingEdge(time: number) {
    lastInvokeTime = time; // 마지막 실행 시간 업데이트

    timerId = setTimeout(timerExpired, wait); // 타이머 설정
    return leading ? invokeFunc(time) : result; // leading옵션에 따라 즉시 실행 여부 결정
  }

  /**  대기 시간 끝 시점(trailing edge) 처리 */
  function trailingEdge(time: number) {
    timerId = undefined; // 타이머 제거

    // trailing옵션이 true이고, 마지막 인수가(대기중인 호출이) 있으면 즉시 실행
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined; // 사용 후 즉시 정리 (메모리 누수 방지)
    return result;
  }

  /** 대기 시간 끝 시점(trailing edge)에 함수 실행할지 여부 확인 */
  function shouldTrailingEdgeInvoke(time: number): boolean {
    const timeSinceLastCall = time - (lastCallTime || 0); // 마지막 호출부터 경과시간
    const timeSinceLastInvoke = time - lastInvokeTime; // 마지막 실행부터 경과시간

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= (wait || 0) ||
      (maxing && timeSinceLastInvoke >= (maxWait || 0))
    );
  }

  /** 남은 대기 시간 계산 */
  function remainingWait(time: number) {
    const timeSinceLastCall = time - (lastCallTime || 0);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = (wait || 0) - timeSinceLastCall;

    return maxing
      ? Math.min(timeWaiting, (maxWait || 0) - timeSinceLastInvoke)
      : timeWaiting;
  }

  /** 타이머 만료 시 호출 */
  function timerExpired() {
    const time = Date.now();

    if (shouldTrailingEdgeInvoke(time)) {
      return trailingEdge(time);
    }

    // 아직 더 기다려야 하면 남은 시간만큼 다시 타이머 설정
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  /** 즉시 실행 취소 */
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    // 모든 상태 초기화
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  /** 즉시 실행 */
  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now());
  }

  /** 메인 디바운스 함수 */
  function debounced(
    this: any,
    ...args: Parameters<T>
  ): ReturnType<T> | undefined {
    const time = Date.now();
    const isInvoking = shouldTrailingEdgeInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(time);
      }

      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(time);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

export default function throttle<T extends (...args: any) => any>(
  func: T,
  wait?: number,
  options?: ThrottleOptions
): DebouncedFunc<T> {
  let leading = true,
    trailing = true;

  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (options && isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }

  return debounce(
    func,
    wait, // 대기 시간(wait)
    {
      leading: leading, // true이면 대기 시간(wait) 시작 시점(leading edge)에 함수를 한 번 실행.
      maxWait: wait, // 호출이 너무 계속 지연되지 않도록, 이 시간 이상 지연되면 무조건 실행.
      trailing: trailing, // true이면 대기 시간 끝 시점(trailing edge)에 함수를 실행.
    }
  );
}

// 일반 debounce: 호출이 계속되면 계속 지연
// maxWait 추가: 아무리 지연되어도 이 시간이 지나면 무조건 실행
// maxWait = wait: "정확히 wait 간격으로 실행" = throttle
