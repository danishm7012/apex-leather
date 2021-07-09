import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { AiOutlineAlignLeft } from "react-icons/ai";

import Link from "next/link";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div className="mobile-navbar">
        <button className="mobile-togal" onClick={onOpenModal}>
          <AiOutlineAlignLeft />
        </button>
        <Modal
          open={open}
          onClose={onCloseModal}
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
          style={{
            width: "100%",
            background: "#222222",
          }}
        >
          <div className="mobile-modal">
            <Link href="http://www.google.com">home</Link>
            <Link href="http://www.google.com">home</Link>
            <Link href="http://www.google.com">home</Link>
            <Link href="http://www.google.com">home</Link>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default MobileNavbar;
