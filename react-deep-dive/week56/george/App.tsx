import { ReactNode } from "react";

import { createPortal } from "@/createPortal";

const App = () => {
  return (
    <div style={{ border: '2px solid black' }}>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      ) as unknown as ReactNode}
    </div>
  );
};

export default App;
