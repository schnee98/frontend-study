import Footer from "./Footer";
import { useWindowSize } from "./useWindowSize";

export default function WindowSizeIndicator() {
  const windowSize = useWindowSize();

  return (
    <div
      style={{ padding: "20px", border: "2px solid #ccc", borderRadius: "8px" }}
    >
      <h1>윈도우 크기 추적</h1>
      <p>
        <strong>너비:</strong> {windowSize.width}px
      </p>
      <p>
        <strong>높이:</strong> {windowSize.height}px
      </p>
      <p style={{ fontSize: "14px", color: "#666" }}>
        💡 브라우저 창 크기를 조절해보세요!
      </p>

      <Footer />
    </div>
  );
}
