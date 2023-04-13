import styled from 'styled-components';
import * as palette from '../../constants/Variables.jsx';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 10px 50px;
  margin-bottom: 16px;
  border-bottom: 2px solid black;
  background-color: rgba(97, 111, 85, 0.837);

  font-family: ${palette.MainFont};

  nav {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.span`
  a {
    display: flex;
    align-items: center;
    :hover {
      align-items: end;
    }

    padding: 10px 10px 10px 0;

    font-size: 35px;
    font-weight: 700;

    @media (max-width: 700px) {
      font-size: 30px;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
`;

export const SearchLink = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;
