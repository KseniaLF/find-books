import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 10px 50px;
  margin-bottom: 16px;
  border-bottom: 2px solid black;

  background-color: rgba(97, 111, 85, 0.837);

  nav {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.span`
  a {
    padding: 10px 10px 10px 0;
    font-size: 40px;
    font-weight: 700;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
