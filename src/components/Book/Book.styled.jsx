import styled from 'styled-components';

export const BookContainer = styled.div`
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

    transition: all 100ms ease-out;

    :hover {
      background-color: rgba(97, 111, 85, 0.922);
      color: #fff;
      /* box-shadow: 0 5px 10px #242124; */
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
