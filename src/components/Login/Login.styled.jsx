import styled from 'styled-components';

export const LogButton = styled.button`
  font-family: 'Josefin Sans', sans-serif;
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
    width: 300px;
    border: 1.5px solid black;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.664);
  }
`;
