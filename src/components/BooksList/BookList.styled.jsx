import styled from 'styled-components';

/*export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`; */

export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(250px, auto)); */
  gap: 10px;

  li {
    text-align: center;
    border-radius: 5px;

    img {
      object-fit: cover;
      transition: all 150ms ease-out;
    }

    :hover img {
      transform: scale(1.05);
      /* box-shadow: 0 0 10px #242124; */
    }

    :hover div::after {
      opacity: 0;
    }
  }
`;

// export const SliderWrapper = styled.div`
//   background-color: rgba(97, 111, 85, 0.926);
//   border-radius: 5px;
//   padding: 30px;
//   h2 {
//     margin-bottom: 20px;
//   }

//   h3 {
//     /* padding: 20px; */
//     background-color: rgb(97, 111, 85);
//   }
// `;

export const SliderItem = styled.div`
  /* margin-right: 10px; */
  /* padding: px; */
  /* background-color: rgb(97, 111, 85); */
`;
