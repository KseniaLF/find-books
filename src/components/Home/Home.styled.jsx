import styled from 'styled-components';
import header from '../../img/header1.jpg';
import girl from '../../img/girl-reader.png';

export const HeaderImg = styled.div`
  > p {
    background-color: rgba(0, 0, 0, 0.389);
    border-radius: 10px;
    padding: 10px;
    /* pa-top: 20px; */
    margin: 0 auto;
    max-width: 500px;
  }

  text-align: center;
  color: white;
  font-family: 'Aboreto', cursive;

  h1 {
    /* margin-top: 80px; */
    padding-top: 70px;
    /* margin-bottom: 50px; */

    font-size: 50px;
    text-transform: uppercase;
  }

  button {
    margin-top: 20px;
    margin-bottom: 200px;
    padding: 15px 30px;
    background-color: rgba(0, 0, 0, 0.671);
    color: white;
    border-radius: 10px;
    :hover {
      padding: 15px 35px;
      background-color: #242124;
    }

    p {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
  /* max-height: 200px; */
  /* overflow: hidden; */
  /* border: 2px solid black; */
  /* width: 100px; */
  height: 400px;

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

export const Main = styled.div`
  background-color: rgba(97, 111, 85, 0.39);
  /* background: linear-gradient(
    rgba(97, 111, 85, 0.807),
    rgba(97, 111, 85, 0.253)
  ); */
  /* margin-top: 20px; */
  list-style-type: none;
  li {
    padding-bottom: 10px;
    /* height: 1000px; */
    /* background: linear-gradient(
        217deg,
        rgb(97, 111, 85),
        rgba(255, 0, 0, 0) 90.71%
      ),
      linear-gradient(
        127deg,
        rgba(97, 111, 85, 0.497),
        rgba(0, 255, 0, 0) 70.71%
      ),
      linear-gradient(
        336deg,
        rgba(97, 111, 85, 0.807),
        rgba(0, 0, 255, 0) 70.71%
      ); */
  }
`;

// export const Fff = styled.div`
//   padding: 50px 150px;
//   background: linear-gradient(
//     rgba(97, 111, 85, 0.253),
//     rgba(97, 111, 85, 0.807)
//   );
// `;

export const Quote = styled.div`
  padding: 50px 20px;
  margin: 0 auto;
  text-align: center;
  max-width: 770px;

  font-weight: 500;

  span {
    font-family: 'Aboreto', cursive;
    /* text-transform: uppercase; */
    color: rgb(97, 111, 85);
    font-size: 35px;
  }

  p {
    margin-top: 20px;

    /* text-transform: lowercase; */
  }
`;

export const GirlReader = styled.div`
  border-radius: 10px;
  padding: 50px;
  background-image: url(${girl});

  background-size: cover;
  background-position: center center;
  height: 200px;
  /* margin-bottom: 20px; */
  margin: 20px 0 60px 0;
  > div {
    height: 80%;
    max-width: 300px;
    padding: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.441);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
      max-width: 200px;
      transition: all 0.3s ease-in;
      color: #fff;
      :hover {
        color: rgb(164, 172, 156);
        padding-left: 20px;
      }

      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;
