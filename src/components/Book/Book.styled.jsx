import styled from 'styled-components';
import * as palette from '../../constants/Variables';

export const BookContainer = styled.div`
  display: flex;
  gap: 30px;

  margin-top: 5px;

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

  button {
    background-color: ${palette.MainColor};
    color: #fff;

    transition: all 300ms;

    :hover {
      /* background-color: #242124; */
    }
  }

  a {
    button {
      background-color: transparent;
      border: 2px solid ${palette.MainColor};
      color: #242124;
    }
  }

  button {
    position: relative;
    overflow: hidden;
    z-index: 10;

    width: 100%;
    padding: 10px;
    margin-bottom: 5px;

    font-family: ${palette.SecondFont};
    font-weight: 700;
    font-size: 20px;

    /* border-radius: 20px; */
    border: 2px solid ${palette.MainColor};
    /* background-color: ${palette.MainColor}; */

    box-shadow: 2px 2px 1px ${palette.MainColor};
    cursor: pointer;

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
  gap: 20px;
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
