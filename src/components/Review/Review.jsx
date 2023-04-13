import { LogButton } from 'components/Login/Login.styled';
import { ModalContainer } from 'components/Login/Login.styled';
import { useState } from 'react';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
  },
  overlay: {
    zIndex: 20,
    backgroundColor: '#24212497',
  },
};

export const Review = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setIsOpen(false);
    console.log(name);
  };

  const handleChangeInput = e => {
    const value = e.target.value;
    setName(value);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    // console.log(555);
  };

  return (
    <div>
      <button type="button" onClick={openModal}>
        Write a Review
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <ModalContainer>
          <p>Write a review:</p>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="good book.."
              autoFocus
              type="text"
              value={name}
              onChange={handleChangeInput}
            />

            <div>
              <LogButton type="submit">OK</LogButton>
              <LogButton type="button" onClick={closeModal}>
                Close
              </LogButton>
            </div>
          </form>
        </ModalContainer>
      </Modal>
    </div>
  );
};
