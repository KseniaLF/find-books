import { Suspense } from 'react';
import { StyledLink } from 'components/App/App.styled';
import { Link, Outlet } from 'react-router-dom';
import {
  HeaderContainer,
  Logo,
  MainWrapper,
  Navigation,
} from './SharedLayout.styled';
import { Login } from 'components/Login/Login';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader';

export const SharedLayout = () => {
  return (
    <MainWrapper>
      <div>
        <HeaderContainer>
          <Logo>
            <Link to="/">Book library</Link>
          </Logo>

          <Navigation>
            <nav>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/search">Search</StyledLink>

              <StyledLink to="/collection">Collection</StyledLink>
            </nav>

            <Login />
          </Navigation>
        </HeaderContainer>

        {/* <Container> */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {/* </Container> */}
      </div>

      <Footer />
    </MainWrapper>
  );
};
