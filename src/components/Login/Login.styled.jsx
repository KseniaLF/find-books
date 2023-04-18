import styled from 'styled-components';

import * as palette from '../../constants/Variables';

export const LoginBlock = styled.div`
  display: flex;
  gap: 10px;

  button {
    font-family: ${palette.MainFont};
    background-color: #242124;
    color: white;

    /* padding: 10px 20px; */

    :hover {
      background-color: #242124da;
    }
  }
`;
export const LogButton = styled.button`
  /* font-family: 'Josefin Sans', sans-serif; */
  font-family: 'Aboreto', cursive;
  font-weight: 700;

  font-size: 20px;
  font-weight: 400;
  background-color: transparent;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: all 300ms;

  background-color: #242124;
  color: white;

  :hover {
    background-color: #242124da;
  }
`;

export const ModalContainer = styled.div`
  background-color: rgb(97, 111, 85);
  padding: 40px;

  p,
  button,
  input {
    font-size: 20px;
  }

  form {
    padding: 10px;
    > div {
      margin-top: 15px;
      display: flex;
      gap: 10px;
      justify-content: center;
    }
  }

  input {
    font-family: ${palette.MainFont};
    width: 300px;
    border: 1.5px solid black;
    border-radius: 5px;
    outline: none;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.664);
  }

  button {
    font-family: ${palette.MainFont};
    background-color: #242124;
    color: white;

    :hover {
      background-color: #242124da;
    }
  }
`;

export const UserName = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 5px;
  /* background-color: rgba(97, 111, 85, 0.397); */
  text-align: center;
  /* font-family: 'Aboreto', cursive; */
  font-weight: 700;

  /* background-color: black; */
  @keyframes p {
    15% {
      -webkit-transform: translateX(9px);
      transform: translateX(9px);
    }
    30% {
      -webkit-transform: translateX(-9px);
      transform: translateX(-9px);
    }
    /* 40% {
      -webkit-transform: translateX(6px);
      transform: translateX(6px);
    } */
    45% {
      -webkit-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    60% {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  :hover {
    -webkit-animation: p 0.6s ease;
    animation: p 0.6s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
`;
