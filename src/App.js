import React from "react";
import styles from "./App.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App({ containerId, resolve }) {
  Modal.setAppElement("#" + containerId);

  function closeModal(status) {
    resolve(status);
  }

  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello, I'm an external app</h2>
        <button onClick={() => closeModal("cancel")}>cancel</button>
        <button
          className={styles.successButton}
          onClick={() => closeModal("success")}
        >
          success
        </button>
      </Modal>
    </div>
  );
}

export default App;
