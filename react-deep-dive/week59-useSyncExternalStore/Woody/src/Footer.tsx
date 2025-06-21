import { useWindowSize } from "./useWindowSize";

export default function Footer() {
  const windowSize = useWindowSize();

  return (
    <div>
      <h3>다른 컴포넌트에서 윈도우 크기 추적</h3>
      <p>
        <strong>너비:</strong> {windowSize.width}px
      </p>
      <p>
        <strong>높이:</strong> {windowSize.height}px
      </p>
    </div>
  );
}
