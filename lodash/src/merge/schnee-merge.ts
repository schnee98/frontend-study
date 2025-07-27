function merge<Target, Source = Target>(target: Target, ...sources: Source[]) {
  if (target == null) {
    return {};
  }

  for (const source of sources) {
    baseMerge(target, source);
  }

  return target;
}

function baseMerge<Target, Source>(target: Target, source: Source) {
  if (!isObjectOrArray(source)) {
    return source;
  }

  if (Array.isArray(source)) {
    if (!Array.isArray(target)) {
      return source;
    }

    const array = target.length > source.length ? target : source;

    array.forEach((_, index) => {
      if (!(index in source)) {
        return;
      }

      if (index in target) {
        target[index] = baseMerge(target[index], source[index]);
      } else {
        target[index] = source[index];
      }
    });

    return target;
  }

  for (const key of Object.keys(source)) {
    if (source[key] == null) {
      continue;
    }

    const sourceValue = source[key];
    const targetValue = target[key];

    if (isObjectOrArray(sourceValue) && isObjectOrArray(targetValue)) {
      target[key] = baseMerge(targetValue, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  }
  return target;
}

function isObjectOrArray(item: any): item is object | any[] {
  return typeof item === "object" && item !== null;
}

export default merge;
