function throttle(
  func: Function,
  wait: number,
  {
    leading = true,
    trailing = true,
  }: { leading: boolean; trailing: boolean } = {
    leading: true,
    trailing: true,
  }
) {
  let timeout: NodeJS.Timeout | null = null;
  let lastCallTime = 0;
  let pendingArgs: any[] | null = null;
  let pendingThis: any = null;
  let isFirstCall = true;

  function saveLastCallTime() {
    lastCallTime = Date.now();
  }

  function clearPending() {
    pendingArgs = null;
    pendingThis = null;
  }

  function clearTimer() {
    if (timeout != null) {
      clearTimeout(timeout);
      timeout = null;
    }
  }

  return function (...args: any[]) {
    const now = Date.now();

    if (isFirstCall) {
      isFirstCall = false;
      if (leading) {
        func.apply(this, args);
        saveLastCallTime();
        return;
      }
      saveLastCallTime();
    }

    if (lastCallTime === 0 && !leading) {
      saveLastCallTime();
    }

    const timeSinceLastCall = now - lastCallTime;
    const timeToNextCall = wait - timeSinceLastCall;

    if (timeSinceLastCall >= wait) {
      clearTimer();
      func.apply(this, args);
      saveLastCallTime();
      clearPending();
      return;
    }

    if (trailing) {
      pendingArgs = args;
      pendingThis = this;
      if (timeout == null) {
        const delay = timeToNextCall > 0 ? timeToNextCall : 0;
        timeout = setTimeout(() => {
          clearTimer();

          if (pendingArgs == null) {
            return;
          }

          func.apply(pendingThis, pendingArgs);
          saveLastCallTime();
          clearPending();
        }, delay);
      }
    }
  };
}

export default throttle;
