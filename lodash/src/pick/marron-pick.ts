type Many<T> = T | T[];

function pick<T extends object, U extends keyof T>(
  object: T,
  ...props: Array<Many<U>>
): Pick<T, U> {
  const keys = new Set();

  props.forEach((prop) => {
    if (Array.isArray(prop)) {
      // U[]인 경우 처리
      prop.forEach((p) => keys.add(String(p)));
    } else {
      keys.add(String(prop));
    }
  });

  const result = Object.fromEntries(
    Object.entries(object).filter(([key]) => keys.has(key))
  );

  return result as Pick<T, U>;
}

export default pick;
