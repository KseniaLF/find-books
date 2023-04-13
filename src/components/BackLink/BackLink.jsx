import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import * as palette from '../../constants/Variables';

const StyledLink = styled(Link)`
  padding: 8px 0;

  /* font-family: ${palette.MainFont}; */
  /* font-weight: 500;
  text-decoration: none;
  text-transform: uppercase; */
  /* a {
    font-family: ${palette.MainFont};
  } */
  button {
    position: relative;
    display: inline-block;

    border: none;
    background-color: transparent;

    cursor: pointer;

    width: 13.5rem;
    height: auto;
  }

  span:not(:last-child) {
    width: 40px;
    height: 40px;

    border-radius: 1.625rem;
    border: 2px solid ${palette.MainColor};
    background-color: rgba(97, 111, 85, 0.888);

    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);

    text-align: center;
    position: relative;
    display: block;

    svg {
      position: absolute;
      top: 8px;
      left: 10px;
    }
  }

  :hover span:not(:last-child) {
    /* color: rgb(97, 111, 85); */
    width: 100%;

    background-color: rgba(97, 111, 85, 0.905);
    /* color: #fff; */
    /* background-color: rgb(97, 111, 85); */
  }
`;

export const Text = styled.span`
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.3rem;
  color: #282936;
  /* font-weight: 700; */
  /* line-height: 1.6; */
  text-align: center;

  font-family: ${palette.MainFont};
  font-weight: 700;
  font-size: 15px;

  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <button>
        <span>
          <HiArrowLeft size="24" />
        </span>
        <Text> {children}</Text>
      </button>
    </StyledLink>
  );
};
