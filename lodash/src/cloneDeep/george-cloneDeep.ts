interface ArrayIteratorResult<T> {
  value: T | undefined;
  key: number | undefined;
  done: boolean;
}

const getArrayIterator = <T>(array: T[]) => {
  let index = 0;

  const next = (): ArrayIteratorResult<T> => {
    if (index >= array.length) {
      return { value: undefined, key: undefined, done: true };
    }
    const result = { value: array[index], key: index, done: false };
    index++;
    return result;
  };

  return { next };
};

interface ObjectIteratorResult<T> {
  value: T[keyof T] | undefined;
  key: keyof T | undefined;
  done: boolean;
}

const getObjectIterator = <T extends Record<string, any>>(object: T) => {
  let index = 0;
  const keys = Object.keys(object) as (keyof T)[];

  const next = (): ObjectIteratorResult<T> => {
    if (index >= keys.length) {
      return { value: undefined, key: undefined, done: true };
    }
    const key = keys[index];
    const result = {
      value: object[key],
      key,
      done: false,
    };
    index++;
    return result;
  };

  return { next };
};

const each = <T>(
  collection: T[] | Record<string, T>,
  iterator: (value: T, key: string, collection: T[] | Record<string, T>) => void
): void => {
  const iteratorFn = isArray(collection)
    ? getArrayIterator(collection as T[])
    : getObjectIterator(collection as Record<string, T>);

  while (true) {
    const { value, key, done } = iteratorFn.next();
    if (done) break;
    iterator(value as T, key as string, collection);
  }
};

const isArray = (collection: any) => {
  if (Array.isArray(collection)) {
    return true;
  } else if (
    typeof collection === "object" &&
    collection !== null &&
    !Array.isArray(collection)
  ) {
    return false;
  }
};

const cloneDeep = <T>(object: T): T => {
  if (object === null || typeof object !== "object") {
    return object;
  }

  const clone: any = isArray(object) ? [] : {};

  each(object as any, (value, key) => {
    clone[key] = cloneDeep(value);
  });

  return clone;
};

export default cloneDeep;
