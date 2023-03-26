import styled from 'styled-components';

export const Container = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto; */
`;

export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(250px, auto)); */
  gap: 10px;

  li {
    text-align: center;

    border-radius: 5px;

    img {
      object-fit: cover;
    }

    :hover {
      box-shadow: 0 0 10px #242124;
    }
  }
`;
