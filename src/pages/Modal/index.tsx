import { useState } from "react";
import "./styles.css";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal ? (
        <div className="modal-overlay">
          <div className={`modal-container ${showModal ? "modal-fadein" : ""}`}>
            <button onClick={() => setShowModal(false)}>Close</button>
            <p>Hi This is my Modal content.</p>
          </div>
        </div>
      ) : (
        <button onClick={() => setShowModal(true)}>Modal</button>
      )}
    </>
  );
};
