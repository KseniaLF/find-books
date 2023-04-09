import styled from 'styled-components';
import header from '../../img/header1.jpg';

export const HeaderImg = styled.div`
  text-align: center;
  h1 {
    /* margin-top: 80px; */
    padding-top: 70px;
    /* margin-bottom: 50px; */

    color: white;
    font-size: 50px;
    text-transform: uppercase;
  }

  button {
    margin-top: 20px;
    padding: 15px 30px;
    background-color: #242124;
    color: white;
    border-radius: 10px;
    :hover {
      background-color: #242124df;
    }
  }
  /* max-height: 200px; */
  /* overflow: hidden; */
  /* border: 2px solid black; */
  /* width: 100px; */
  height: 500px;

  background-image: linear-gradient(
      rgba(97, 111, 85, 0.807),
      rgba(97, 111, 85, 0.253)
    ),
    url(${header});
  /* background-origin: border-box;
  background-repeat: no-repeat; */
  background-size: cover;
  background-position: center center;
`;
