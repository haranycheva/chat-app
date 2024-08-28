import { useEffect, useRef } from "react";
import "./ModalWrapper.css";
import { current } from "@reduxjs/toolkit";

function ModalWrapper({ onClose, children }) {
  const modalWrapp = useRef(null);
  const closeModal = (e) => {
    if (
      e?.code === "Escape" ||
      e.target === e.currentTarget ||
      e.target.closest("button")?.id === "close-btn"
    ) {
      document.body.style.overflow = "auto";
      modalWrapp.current.classList.remove("active");
      setTimeout(() => {
        onClose();
      }, 750);
    }
  };
  useEffect(() => {
    modalWrapp.current = document.querySelector(".modal-wrapp__back");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      modalWrapp.current.classList.add("active");
    }, 100);
    window.addEventListener("keydown", closeModal);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", closeModal);
    };
  }, []);

  return (
    <div className="modal-wrapp__back" onClick={(e) => closeModal(e)}>
      <div className="modal-wrapp__content">
        {children}
        <button
          type="button"
          onClick={(e) => closeModal(e)}
          id="close-btn"
          className="modal-wrapp__close-btn"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default ModalWrapper;
