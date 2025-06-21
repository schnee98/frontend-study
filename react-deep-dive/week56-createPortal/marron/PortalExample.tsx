import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import { marronCreatePortal, marronUnmountPortal } from "./marronCreatePortal";

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      marronCreatePortal({
        children: <ModalContent onClose={() => setShowModal(false)} />,
        domNode: document.body,
        key: "modal",
      });
    } else {
      // showModal이 false로 변경되면 포탈을 제거
      marronUnmountPortal("modal");
    }
  }, [showModal]);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
    </>
  );
}
