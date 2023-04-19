import { Button } from 'components/Button/Button';
import { LogButton } from 'components/Login/Login.styled';
import { ModalContainer } from 'components/Login/Login.styled';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

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
import { YourRating, getInitialRate } from 'components/Rating/Rating';

import ShowMoreText from 'react-show-more-text';

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
  const { id } = useParams();

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

              {/* <YourRating id={id} /> */}

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
                      <UserInfo>
                        {getIsLogin() ? getIsLogin() : 'Anonym user'}
                        <span>
                          <AiFillStar size={30} fill="rgb(250,219,20)" />
                          {getInitialRate(id)}
                        </span>
                      </UserInfo>
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
                    Book Worm{' '}
                    <span>
                      <AiFillStar size={30} fill="rgb(250,219,20)" /> 5
                    </span>
                  </UserInfo>
                  {/* Review: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Dolor pariatur molestiae maxime recusandae
                  exercitationem saepe amet ea enim quaerat, numquam, assumenda
                  ipsum. */}

                  <ShowMoreText
                    truncatedEndingComponent={'...❤ '}
                    lines={4}
                    more="Show more"
                    less="Show less"
                  >
                    <p>
                      "Books are a uniquely portable magic." - Stephen King.
                    </p>
                    <br />
                    <p>
                      This quote perfectly captures the power and allure of
                      books. Books have the ability to transport us to different
                      worlds and times, to introduce us to new ideas and
                      perspectives, and to inspire and move us in ways that
                      nothing else can.
                    </p>
                    <br />
                    <p>
                      King's words also remind us that books are a unique form
                      of magic. They can take us places that we may never have
                      the opportunity to visit in real life, and they can
                      introduce us to characters and experiences that we may
                      never encounter otherwise. They have the power to expand
                      our minds and our hearts, and to connect us to a world
                      that is larger and more complex than we could ever
                      imagine.
                    </p>
                    <br />
                    <p>
                      Overall, King's quote is a testament to the enduring power
                      of books, and to the magic that they can bring into our
                      lives. It is a reminder that in a world that can often
                      feel chaotic and uncertain, books can be a source of
                      wonder, joy, and inspiration.
                    </p>
                  </ShowMoreText>
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

          <YourRating id={id} />

          <form onSubmit={handleSubmit}>
            {/* <input
              size="50"
              placeholder="good book.."
              autoFocus
              type="text"
              value={name}
              onChange={handleChangeInput}
            /> */}

            <textarea
              rows="5"
              autoFocus
              value={name}
              onChange={handleChangeInput}
              placeholder="This book is so..."
            >
              {/* This book is so... */}
            </textarea>

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
