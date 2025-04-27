```ts
import { useRef } from "react";

let idCounter = 0;

function marronUseId() {
  const id = useRef();

  if (!id.current) {
    id.current = `:r${idCounter++}:`;
  }

  return id.current;
}
```
