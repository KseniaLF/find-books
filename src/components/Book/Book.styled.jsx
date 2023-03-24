import styled from 'styled-components';

export const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  /* flex-wrap: wrap; */
  /* border: 2px solid black; */
  margin: 20px 0;

  @media (max-width: 615px) {
    flex-wrap: wrap;
  }
`;

export const BookImg = styled.div`
  /* margin-right: 20px;
 */

  min-width: 200px;
  max-width: 300px;
  div {
    border: 2px solid #242124;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 5px 10px #242124;
    text-align: center;

    img {
      width: 100%;

      object-fit: cover;
      border-radius: 5px;
    }
  }
`;
export const BookInfoBlock = styled.div`
  /* width: 200px; */
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  h2 {
    padding-bottom: 10px;
    border-bottom: 2px solid #242124;
  }

  ul {
    /* display: flex;
    flex-wrap: wrap;
    gap: 10px; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    gap: 15px;

    li {
      font-size: 18px;
      padding: 5px;
      /* background-color: #242124; */
      background-color: #752333;
      border-radius: 5px;
      /* border: 2px solid #242124; */
      color: #fff;
      text-align: center;
    }
  }
`;

export const Buttons = styled.div`
  /* display: flex;
  justify-content: space-between; */
  /* gap: 10px; */
  /* justify-content: center; */
  /* li {
    width: 15em;
  } */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  gap: 15px;

  button {
    font-family: 'Josefin Sans', sans-serif;
    border: none;
    border-radius: 5px;
    padding: 15px;
    background-color: #242124;
    width: 100%;
    /* width: 263px; */
    margin-bottom: 5px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;

    transition: all 100ms ease-out;

    :hover {
      background-color: #752333;
      box-shadow: 0 5px 10px #242124;
    }
  }
`;

export const Description = styled.p`
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: #752333;
  width: 110px;
  margin-bottom: 5px;
  font-size: 20px;
  color: #fff;
  margin-bottom: 15px;
`;

export const BuyButton = styled.div`
  text-align: center;

  font-family: 'Josefin Sans', sans-serif;
  border: none;
  border-radius: 5px;
  padding: 15px;
  background-color: #242124;
  /* width: 100%; */
  /* width: 263px; */
  margin-bottom: 5px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;

  transition: all 100ms ease-out;

  a {
    color: #fff;
  }

  :hover {
    background-color: #752333;
    box-shadow: 0 5px 10px #242124;
  }
`;
// styledButton
