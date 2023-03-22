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

// export const CardWrapper = styled.li`
//   border: 1px solid black;
//   /* max-width: 230px; */
//   border-radius: 4px;
//   padding: 10px;

//   a {
//     text-decoration: none;
//   }

//   div {
//     padding: 15px;
//     height: 260px;
//     /* background-color: aqua;   */
//   }
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// export const ProductName = styled.p`
//   text-align: center;
//   padding: 4px;
//   margin-top: 8px;
//   margin-bottom: 0;
//   color: black;
// `;

export const List = styled.ul`
  /* border: 2px solid black; */
  margin-top: 20px;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));

  gap: 20px;

  li {
    border: 1px solid black;
    border-radius: 5px;
    /* padding: 10px; */
    div {
      height: 90%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
    }

    p {
      text-align: center;
      padding: 5px;
      text-transform: lowercase;
    }

    :hover {
      box-shadow: 0 0 10px #242124;
    }
  }
`;
