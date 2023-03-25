import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  /* border: 2px solid black; */
  margin-top: 20px;

  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
  /* grid-template-columns: repeat(auto-fill, minmax(250px, auto)); */
  /* gap: 20px; */

  li {
    margin-bottom: 15px;
    /* border: 1px solid black; */
    border-radius: 5px;

    img {
      object-fit: cover;
    }

    p {
      margin-top: 10px;
      text-transform: lowercase;
    }

    :hover {
      box-shadow: 0 0 10px #242124;
    }
  }
`;
