import { useEffect } from "react";
import "./InteractionModal.css";

function InteractionModal({ coordinates, onClose, setModalName, type }) {
  const closeModal = (e) => {
    if (e?.code === "Escape" || e.target === e.currentTarget) {
      document.body.style.overflow = "auto";
      onClose();
    }
  };
  const handleDelete = () => {
    setModalName(`delete-${type}`)
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeModal);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", closeModal);
    };
  }, []);
  return (
    <div
      className="interaction__wrapp"
      onClick={(e) => {
        closeModal(e);
      }}
    >
      <div
        className="interaction__modal"
        style={{ top: coordinates.y + "px", left: coordinates.x - 150 + "px" }}
      >
        <ul className="">
          <li>
            <button type="button" className="interaction__btn" onClick={() => handleDelete()}>
              Delete
            </button>
          </li>
          <li>
            <button type="button" className="interaction__btn">
              Change
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InteractionModal;
