import React, { ReactElement, useEffect } from "react";
import { createRoot } from "react-dom/client";

export function myCreatePortal(children: ReactElement, domNode: Element) {
  const mirrorRef = React.createRef<HTMLDivElement>();

  const MyPortalComponent = () => {
    useEffect(() => {
      const el = document.createElement("div");
      domNode.appendChild(el);

      const handleClick = (e: MouseEvent) => {
        e.stopPropagation();
        if (mirrorRef.current) {
          const newEvent = new MouseEvent(e.type, e);
          mirrorRef.current.dispatchEvent(newEvent);
        }
      };

      el.addEventListener("click", handleClick);

      const root = createRoot(el);
      root.render(children);

      return () => {
        el.removeEventListener("click", handleClick);
        root.unmount();
        domNode.removeChild(el);
      };
    }, []);

    return <div ref={mirrorRef} style={{ display: "none" }} />;
  };

  return <MyPortalComponent />;
}
