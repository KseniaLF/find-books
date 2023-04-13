import styled from 'styled-components';
import header from '../../img/header1.jpg';
import girl from '../../img/girl-reader.png';

import * as palette from '../../constants/Variables';

export const HeaderImg = styled.div`
  height: 400px;

  text-align: center;
  color: white;
  font-family: ${palette.MainFont};

  > p {
    max-width: 500px;
    padding: 10px;
    margin: 0 auto;

    background-color: rgba(0, 0, 0, 0.389);
    border-radius: 10px;
  }

  h1 {
    padding-top: 70px;

    font-size: 50px;
    text-transform: uppercase;
  }

  button {
    margin-top: 20px;
    padding: 15px 30px;
    border-radius: 10px;

    background-color: rgba(0, 0, 0, 0.671);
    color: white;

    :hover {
      padding: 15px 35px;
      background-color: #242124;
    }

    p {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  background-image: linear-gradient(
      rgba(97, 111, 85, 0.807),
      rgba(97, 111, 85, 0.253)
    ),
    url(${header});

  background-size: cover;
  background-position: center center;
`;

export const Main = styled.div`
  background-color: rgba(97, 111, 85, 0.39);
`;

export const Quote = styled.div`
  max-width: 770px;
  padding: 50px 20px;
  margin: 0 auto;

  text-align: center;
  font-weight: 500;

  span {
    font-family: ${palette.MainFont};
    color: ${palette.MainColor};
    font-size: 35px;
  }

  p {
    margin-top: 20px;
  }
`;

export const GirlReader = styled.div`
  height: 200px;
  margin: 20px 0 60px 0;
  border-radius: 10px;
  padding: 50px;

  background-image: url(${girl});
  background-size: cover;
  background-position: center center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    height: 80%;
    max-width: 300px;
    padding: 20px;
    border-radius: 10px;

    color: #fff;
    background-color: rgba(0, 0, 0, 0.441);

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      max-width: 200px;
      color: #fff;

      transition: all 0.3s ease-in;

      :hover {
        color: rgb(164, 172, 156);
        padding-left: 20px;
      }
    }
  }
`;
