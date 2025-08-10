function throttle(
  fn: Function,
  delay: number,
  options = { leading: true, trailing: true }
) {
  let timer;
  let lastArgs: any[] | null = null;
  let lastThis = null;
  const { leading = true, trailing = true } = options;

  return function (this: any, ...args: any[]) {
    // this 객체 참조
    if (timer) {
      lastArgs = args;
      lastThis = this;
      return;
    }

    if (leading) {
      fn.apply(this, args);
    } else {
      lastArgs = args;
      lastThis = this;
    }

    timer = setTimeout(() => {
      if (trailing && lastArgs) {
        fn.apply(lastThis, lastArgs);
        lastArgs = null;
        lastThis = null;
      }
      timer = null;
    }, delay);
  };
}

export default throttle;
