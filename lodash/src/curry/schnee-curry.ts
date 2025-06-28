const placeholder: symbol = Symbol("placeholder");

export function curry<P extends any[], R>(fn: (...args: P) => R) {
  function curried(prevArgs: any[] = []) {
    return (...currentArgs: any[]) => {
      const args = [...prevArgs];
      let placeHolderIndex = args.findIndex((arg) => arg === placeholder);

      for (const arg of currentArgs) {
        if (placeHolderIndex !== -1) {
          args[placeHolderIndex] = arg;
          placeHolderIndex = args.findIndex(
            (arg, i) => arg === placeholder && i > placeHolderIndex
          );
        } else {
          args.push(arg);
        }
      }

      const hasPlaceholder = args.some((arg) => arg === placeholder);
      const hasEnoughArgs =
        args.filter((arg) => arg !== placeholder).length >= fn.length;

      if (!hasPlaceholder && hasEnoughArgs) {
        return fn(...(args.slice(0, fn.length) as P));
      }

      return curried(args);
    };
  }

  return curried();
}

curry.placeholder = placeholder;

export default curry;
