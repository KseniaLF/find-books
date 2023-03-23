import styled from 'styled-components';

export const CardWrapperBlock = styled.div`
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  img {
    margin-right: 25px;
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 15px;
    background-color: #242124;
    /* background-color: rgb(104, 12, 72); */
    width: 200px;
    margin-bottom: 5px;
    font-size: 17px;

    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
