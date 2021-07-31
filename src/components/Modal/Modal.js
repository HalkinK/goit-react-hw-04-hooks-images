import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ imageForModal, tags, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", onEscClick);
    return () => {
      window.removeEventListener("keydown", onEscClick);
    };
  });

  const onEscClick = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={imageForModal} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imageForModal: PropTypes.string.isRequired,
  // tags: PropTypes.string.isRequired,
};
