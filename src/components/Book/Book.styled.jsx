import styled from 'styled-components';

export const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  /* border: 2px solid black; */
  margin: 20px 0;

  @media (max-width: 760px) {
    flex-wrap: wrap;
  }
`;

export const BookImg = styled.div`
  margin-right: 20px;
  img {
    object-fit: cover;
  }
  @media (max-width: 760px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;
export const FeaturesList = styled.ul`
  /* width: 200px; */
`;
