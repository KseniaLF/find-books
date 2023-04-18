import styled from 'styled-components';
import * as palette from '../../constants/Variables';

export const Reviews = styled.div`
  margin-top: 30px;

  h3 {
    font-size: 30px;
  }

  /* background-color: red; */
  border-top: 2px solid ${palette.MainColor};
  border-bottom: 2px solid ${palette.MainColor};

  padding: 30px 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-top: 15px;
    text-align: center;

    > p {
      font-size: 30px;
    }
  }

  button {
    border: none;
    outline: none;
    font-size: 20px;
    background-color: ${palette.MainColor};
    color: white;
    padding: 15px 30px;

    transition: all 300ms;
    :hover {
      padding: 15px 40px;
      /* background-color: ${palette.SecondColor}; */
    }
  }
`;

export const UserReview = styled.ul`
  li {
    display: flex;
    gap: 50px;

    padding: 0 20px;

    @media (max-width: 560px) {
      gap: 20px;
      padding: 0;
    }
    @media (max-width: 400px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    margin-top: 25px;

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    div {
      font-size: 20px;
      text-align: start;
    }
  }
`;

export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 400px) {
    width: 150px;
    height: 150px;
  }
`;

export const UserInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    display: flex;
    align-items: center;
    gap: 2px;
  }
`;

export const EditBtn = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  gap: 10px;

  button {
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;

    display: flex;
    align-items: center;
    text-align: center;

    :hover {
      padding: 10px;
      background-color: ${palette.SecondColor};
    }
  }
`;
