function merge<TObject extends object | any[], TSource extends object | any[]>(
  object: TObject,
  sources: TSource
): TObject & TSource {
  if (Array.isArray(object)) {
    return object.concat(sources) as TObject & TSource;
  }

  if (typeof object === "object" && object !== null) {
    Object.keys(sources).forEach((key) => {
      const objectValue = object[key];
      const sourceValue = sources[key];

      if (Array.isArray(objectValue) && Array.isArray(sourceValue)) {
        object[key] = objectValue.concat(sourceValue);
      } else if (
        typeof objectValue === "object" &&
        typeof sourceValue === "object"
      ) {
        object[key] = merge(objectValue, sourceValue);
      } else {
        object[key] = sourceValue;
      }
    });
  }

  return {} as TObject & TSource;
}

export default merge;
