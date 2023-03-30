import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  /* display: inline-flex;
  align-items: center;
  gap: 4px; */
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  button {
    border: none;
    background-color: transparent;
    position: relative;
    display: inline-block;
    /* vertical-align: middle;
    text-decoration: none; */
    cursor: pointer;
    width: 13.5rem;
    height: auto;
  }

  span:not(:last-child) {
    border: 2px solid rgb(97, 111, 85);
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    /* width: 3rem;
    height: 3rem; */
    width: 40px;
    height: 40px;
    border-radius: 1.625rem;
    text-align: center;
    position: relative;
    display: block;
    background-color: rgba(97, 111, 85, 0.888);

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
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.3rem;
  color: #282936;
  /* font-weight: 700; */
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;

  font-family: 'Josefin Sans', sans-serif;
  font-size: 15px;
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
