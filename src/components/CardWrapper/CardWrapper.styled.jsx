import styled from 'styled-components';

export const CardWrapperBlock = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }

  button {
    font-family: 'Josefin Sans', sans-serif;
    border: none;
    border-radius: 5px;
    padding: 15px;
    background-color: #242124;
    width: 200px;
    margin-bottom: 10px;
    font-size: 17px;
    color: #fff;
    cursor: pointer;

    transition: all 100ms ease-out;

    :hover {
      background-color: #752333;
      box-shadow: 0 5px 10px #242124;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

export const WrapperBookImg = styled.div`
  width: 135px;
  border: 2px solid #242124;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 5px 10px #242124;
  text-align: center;

  margin-right: 25px;
  @media (max-width: 400px) {
    margin-right: 0;
  }

  img {
    border-radius: 5px;
  }
`;

export const DescriptionWrapper = styled.div`
  div {
    @media (max-width: 400px) {
      display: none;
    }
  }
`;
export const OptionsWrapper = styled.div`
  text-align: center;
  p {
    margin-bottom: 10px;
  }
  @media (max-width: 670px) {
    flex-wrap: wrap;
    display: none;
  }
`;
