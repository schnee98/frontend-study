import { useId } from "./useId";

export function EmptyComponent({ children }: { children?: React.ReactNode }) {
  const id = useId();

  return (
    <div>
      <p>{id}</p>
      {children}
    </div>
  );
}
