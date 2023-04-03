import styled from 'styled-components';

export const CardWrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    margin-top: 10px;
    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  :hover div::after {
    opacity: 1;
  }
`;

export const WrapperBookImg = styled.div`
  height: 200px;
  position: relative;
  /* background-color: #fff;
  padding: 10px 30px; */

  /* width: 135px; */
  border-radius: 5px;

  img {
    text-align: center;
    border-radius: 5px;
  }
  overflow: hidden;

  ::after {
    content: 'Quick View';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 128px;
    /* transform: translate(-50%, -50%); */
    opacity: 0;
    background: linear-gradient(transparent, 5%, rgb(97, 111, 85));
    /* background-color: rgba(97, 111, 85, 0.695); */
    color: white;
    padding: 20px 10px 10px 10px;
    /* border-radius: 5px; */
    transition: opacity 0.3s ease-in-out;
  }

  /* :hover::after {
    opacity: 1;
  } */
`;
