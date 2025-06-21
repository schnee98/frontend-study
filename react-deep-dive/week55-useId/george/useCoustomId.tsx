
import { useRef } from "react";
import { idState } from "@/constants";

const useCustomId = () => {
  const id = useRef<null | number>(null);
  const prefix = (idState.identifierPrefix ?? '') + 'r';

  if (id.current === null) {
    id.current = idState.count;
    idState.count++;
  };

  return `:${prefix}${id.current}:`
}

export default useCustomId
