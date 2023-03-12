import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  p {
    font-size: 30px;
    font-weight: 500;
  }
`;

export const Gif = styled.iframe`
  margin-top: 20px;
  display: block;
  border: none;
  pointer-events: none;
`;
