import React from 'react'
import styles from './App.module.css'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

function App({ containerId, resolve }) {
  const [isOpen, setOpen] = React.useState(true)
  Modal.setAppElement('#' + containerId)
  var subtitle

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal(status) {
    resolve(status)
    setOpen(false)
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello, I'm an external app</h2>
        <button onClick={() => closeModal('CANCEL')}>
          cancel
        </button>
        <button className={styles.successButton} onClick={() => closeModal('SUCCESS')}>
          success
        </button>
      </Modal>
    </div>
  )
}

export default App
