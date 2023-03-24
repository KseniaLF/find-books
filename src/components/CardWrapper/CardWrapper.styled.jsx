import styled from 'styled-components';

export const CardWrapperBlock = styled.div`
  padding: 20px;

  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    border-radius: 5px;
    padding: 15px;
    background-color: #242124;
    width: 200px;
    margin-bottom: 5px;
    font-size: 17px;
    color: #fff;
    cursor: pointer;

    transition: all 100ms ease-out;

    :hover {
      background-color: #752333;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
`;

export const WrapperBookImg = styled.div`
  border: 2px solid #242124;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 5px 10px #242124;
  text-align: center;

  margin-right: 25px;

  img {
    border-radius: 5px;
  }
`;
