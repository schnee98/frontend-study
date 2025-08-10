const throttle = (
  fn: Function,
  delay: number,
  {
    leading = true,
    trailing = true,
  }: { leading: boolean; trailing: boolean } = {
    leading: true,
    trailing: true,
  }
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: any[] | null = null;
  let lastThis: any = null;

  return function (this: any, ...args: any[]) {
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
};

export default throttle;
