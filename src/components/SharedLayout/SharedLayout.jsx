import { Suspense } from 'react';
import { Container, StyledLink } from 'components/App/App.styled';
import { Outlet } from 'react-router-dom';
import { Logo, Navigation } from './SharedLayout.styled';
import { Login } from 'components/Login/Login';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Logo>
          BOOKS
          {/* <img src={require('img/logo.png')} alt="logo" width={90} /> */}
        </Logo>

        <Navigation>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            {/* <StyledLink to="/about">About</StyledLink> */}
            <StyledLink to="/products">Favorites</StyledLink>
          </nav>

          <Login />
        </Navigation>
      </header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
