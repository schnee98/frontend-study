import { useState } from "react";
import { tree } from "./tree";

export function useId() {
  const [index] = useState(tree.index++);
  const prefix =
    tree.identifierPrefix != null ? tree.identifierPrefix + "-" : "r";

  return `«${prefix}${index.toString(32)}»`;
}
