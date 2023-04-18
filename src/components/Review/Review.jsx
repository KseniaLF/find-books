import { Button } from 'components/Button/Button';
import { LogButton } from 'components/Login/Login.styled';
import { ModalContainer } from 'components/Login/Login.styled';
import { useState } from 'react';

import Modal from 'react-modal';
import {
  EditBtn,
  Reviews,
  UserImg,
  UserInfo,
  UserReview,
} from './Review.styled';

import { BsFillTrash3Fill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { getIsLogin } from 'components/Login/Login';

import user from '../../img/user2.jpg';
import user2 from '../../img/user3.jpg';

import { AiFillStar } from 'react-icons/ai';

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
  const [review, setreview] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setIsOpen(false);
    console.log(name);
    setreview(name);
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

  const handleRemove = () => {
    setreview('');
  };

  return (
    <div>
      <Reviews>
        <h3>Ratings & Reviews</h3>

        <div>
          {!review && (
            <>
              <p>What do you think?</p>
              {/* {getIsLogin() && getIsLogin() !== '' ? ( */}
              <Button>
                <button type="button" onClick={openModal}>
                  Write a Review
                </button>
              </Button>
              {/* ) : (
                <LoginFnc text="Write a Review" />
              )} */}
            </>
          )}

          <UserReview>
            <ul>
              {review && (
                <li>
                  {/* <span> */}
                  <UserImg src={user} alt="user" />

                  {/* </span> */}

                  <div>
                    <div>
                      <p style={{ marginBottom: '10px' }}>
                        {' '}
                        {getIsLogin() ? getIsLogin() : 'Anonym user'}
                      </p>
                      <p>Your review: {review}</p>
                    </div>
                    <EditBtn>
                      <button type="button" onClick={openModal} title="edit">
                        <FiEdit />
                      </button>

                      <button
                        type="button"
                        onClick={handleRemove}
                        title="remove"
                      >
                        <BsFillTrash3Fill />
                      </button>
                    </EditBtn>{' '}
                  </div>
                </li>
              )}

              <li>
                <UserImg src={user2} alt="user" />

                <div style={{ display: 'block' }}>
                  <UserInfo>
                    Potato Taot{' '}
                    <span>
                      <AiFillStar size={30} fill="rgb(250,219,20)" /> 5
                    </span>
                  </UserInfo>
                  Review: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dolor pariatur molestiae maxime recusandae
                  exercitationem saepe amet ea enim quaerat, numquam, assumenda
                  ipsum.
                </div>
              </li>
            </ul>
          </UserReview>
        </div>
      </Reviews>

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
