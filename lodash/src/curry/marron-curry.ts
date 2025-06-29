const placeholder = Symbol("placeholder");

function curry(fn: Function) {
  return function curried(...args) {
    const countArgs = args.filter((arg) => arg !== placeholder);

    if (countArgs.length >= fn.length && !args.includes(placeholder)) {
      const finalArgs = args.slice(0, fn.length);
      return fn(...finalArgs);
    }

    return function (...nextArgs) {
      let merged = [...args];
      let nextIndex = 0;

      for (let i = 0; i < merged.length && nextIndex < nextArgs.length; i++) {
        if (merged[i] === placeholder) {
          merged[i] = nextArgs[nextIndex++];
        }
      }
      merged = [...merged, ...nextArgs.slice(nextIndex)];

      return curried(...merged);
    };
  };
}
curry.placeholder = placeholder;

export default curry;
