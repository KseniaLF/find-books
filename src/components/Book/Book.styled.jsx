import styled from 'styled-components';

export const BookContainer = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 30px;

  @media (max-width: 560px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const BookImg = styled.div`
  min-width: 250px;
  max-width: 250px;

  div {
    text-align: center;
    img {
      width: 100%;

      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

export const OptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;

  > button {
    background-color: rgb(97, 111, 85);
    color: #fff;
  }
  a {
    button {
      border: 2px solid rgb(97, 111, 85);
    }
  }

  button {
    font-family: 'Josefin Sans', sans-serif;
    border-radius: 20px;
    border: 2px solid rgb(97, 111, 85);
    padding: 10px;
    width: 100%;
    margin-bottom: 5px;
    font-size: 17px;
    cursor: pointer;

    box-shadow: 2px 2px 1px rgb(97, 111, 85);
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    font-weight: 700;
    font-size: 20px;
    overflow: hidden;
    position: relative;
    z-index: 10;

    ::after {
      content: '';
      position: absolute;
      background-color: rgba(97, 111, 85, 0.673);
      width: 0px;
      height: 0px;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s ease-in;
      z-index: -1;
    }
    :hover::after {
      transform-origin: center;
      transition: all 0.4s ease-in;
      width: 300px;
      height: 300px;
    }
  }
`;
export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Italic = styled.span`
  font-style: italic;
`;

export const RateBlock = styled.div`
  svg {
    width: 30px;
    height: 30px;
  }
`;
