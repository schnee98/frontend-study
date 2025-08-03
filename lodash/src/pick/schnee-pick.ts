function pick<T extends object>(source: T, ..._paths: string[] | string[][]) {
  const paths: string[] = _paths.flatMap((path) => path);

  const result = {};

  for (const path of paths) {
    if (source[path] != null) {
      result[path] = source[path];
    }
  }

  return result;
}

export default pick;
