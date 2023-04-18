import { useEffect, useState } from 'react';
import { LoginBlock, ModalContainer, UserName } from './Login.styled';

import Modal from 'react-modal';
import { Button } from 'components/Button/Button';
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

export const getIsLogin = () => {
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
    setIsLogin(false);
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
    <LoginBlock>
      {isLogin && (
        <UserName>
          <p>Hi, {isLogin}</p>
        </UserName>
      )}

      {!isLogin && (
        <Button>
          <button type="button" onClick={openModal}>
            Log In
          </button>
        </Button>
      )}
      {isLogin && (
        <Button>
          <button type="button" onClick={handleOut}>
            Log out
          </button>
        </Button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <ModalContainer>
          <p>Enter your name:</p>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="type nickname.."
              autoFocus
              type="text"
              value={name}
              onChange={handleChangeInput}
            />

            <div>
              <Button>
                <button type="submit">Log in</button>
              </Button>

              <Button>
                <button type="button" onClick={closeModal}>
                  Close
                </button>
              </Button>
            </div>
          </form>
        </ModalContainer>
      </Modal>
    </LoginBlock>
  );
};

// export const LoginFnc = ({ text }) => {
//   const [isLogin, setIsLogin] = useState(getIsLogin);
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [name, setName] = useState('');

//   useEffect(() => {
//     const parsedIsOnline = JSON.stringify(isLogin);
//     if (parsedIsOnline === 'null') {
//       return console.log(parsedIsOnline);
//     }

//     localStorage.setItem('isLogin', parsedIsOnline);
//   }, [isLogin]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     setIsOpen(false);
//     setIsLogin(name);
//   };

//   const handleChangeInput = e => {
//     const value = e.target.value;
//     setName(value);
//   };

//   const openModal = () => {
//     setIsOpen(true);
//   };
//   const closeModal = () => {
//     setIsOpen(false);
//     // console.log(555);
//   };

//   return (
//     <LoginBlock>
//       <Button>
//         <button type="button" onClick={openModal}>
//           {text}
//         </button>
//       </Button>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Modal"
//       >
//         <ModalContainer>
//           <p>Enter your name:</p>

//           <form onSubmit={handleSubmit}>
//             <input
//               placeholder="type nickname.."
//               autoFocus
//               type="text"
//               value={name}
//               onChange={handleChangeInput}
//             />

//             <div>
//               <Button>
//                 <button type="submit">Log in</button>
//               </Button>

//               <Button>
//                 <button type="button" onClick={closeModal}>
//                   Close
//                 </button>
//               </Button>
//             </div>
//           </form>
//         </ModalContainer>
//       </Modal>
//     </LoginBlock>
//   );
// };
