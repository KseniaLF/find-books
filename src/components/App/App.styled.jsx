import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  /* text-align: center; */
  max-width: 980px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  /* text-align: center; */

  &.active {
    color: white;
    background-color: #242124;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.671);
    color: #fff;
  }

  :not(:last-child) {
    margin-right: 10px;
  }
`;
