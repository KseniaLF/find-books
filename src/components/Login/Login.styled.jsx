import styled from 'styled-components';

export const Button = styled.button`
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

  :hover {
    background-color: #242124;
    color: white;
  }
`;
