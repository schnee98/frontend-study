import { ReactNode } from "react";

import { createPortal } from "@/createPortal";

const Modal = () => {
  return createPortal(
    <div style={{ color: "red" }}>
      <p>hello</p>
    </div>,
    document.body
  ) as unknown as ReactNode;
};

const Component1 = () => {
  return (
    <div>component1</div>
  );
};

const App = () => {
  return (
    <>
      <div>
        <Component1/>
        <Modal/>
      </div>
    </>
  );
};

export default App;
