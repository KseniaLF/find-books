import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

export const LoaderStyled = styled.div`
  div {
    justify-content: center;
  }
`;
export const Loader = () => {
  return (
    <LoaderStyled>
      <ThreeDots
        // height="80"
        // width="80"
        // radius="9"
        color="rgb(97, 111, 85)"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderStyled>
  );
};
