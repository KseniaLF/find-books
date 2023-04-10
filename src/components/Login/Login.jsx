import { useEffect, useState } from 'react';
import { LogButton, ModalContainer } from './Login.styled';

import Modal from 'react-modal';
// Modal.defaultStyles.overlay.backgroundColor = '#24212497';

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
    backgroundColor: '#24212497',
  },
};

Modal.setAppElement('#root');

const getIsLogin = () => {
  const isLogin = localStorage.getItem('isLogin');

  if (isLogin) {
    return JSON.parse(isLogin);
  }
  return null;
};

export const Login = () => {
  const [isLogin, setIsLogin] = useState(getIsLogin);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const parsedIsOnline = JSON.stringify(isLogin);
    if (parsedIsOnline === 'null') {
      return console.log(parsedIsOnline);
    }

    localStorage.setItem('isLogin', parsedIsOnline);
  }, [isLogin]);

  const handleOut = () => {
    setIsLogin('');
    setName('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsOpen(false);
    setIsLogin(name);
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
    <>
      {isLogin && <p>Hi, {isLogin}</p>}

      {!isLogin && (
        <LogButton type="button" onClick={openModal}>
          Log In
        </LogButton>
      )}
      {isLogin && (
        <LogButton type="button" onClick={handleOut}>
          Log out
        </LogButton>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer>
          <p>Enter your name</p>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="type nickname.."
              autoFocus
              type="text"
              value={name}
              onChange={handleChangeInput}
            />

            <div>
              <LogButton type="submit">Log in</LogButton>
              <LogButton type="button" onClick={closeModal}>
                Close
              </LogButton>
            </div>
          </form>
        </ModalContainer>
      </Modal>
    </>
  );
};
