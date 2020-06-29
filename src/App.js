import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
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

function App({ containerId }) {
  Modal.setAppElement('#' + containerId)
  var subtitle

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    const event = new CustomEvent('react-app-status', {
      detail: { status: 'CANCELLED' },
    })
    window.dispatchEvent(event)
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
  }

  return (
    <div>
      <Modal
        isOpen={true}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button className="Modal__button" onClick={closeModal}>
          close
        </button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  )
}

export default App
