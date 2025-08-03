const pick = <T extends object, K extends keyof T>(object: T, keys: K[]): Pick<T, K> => {
  const result = {} as Pick<T, K>;

  for (const key of keys) {
    if (key in object) {
      result[key] = object[key];
    }
  }

  return result;
};