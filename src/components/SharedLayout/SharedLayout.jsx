import { Suspense } from 'react';
import { StyledLink } from 'components/App/App.styled';
import { Link, Outlet } from 'react-router-dom';
import {
  HeaderContainer,
  Logo,
  MainWrapper,
  Navigation,
  SearchLink,
} from './SharedLayout.styled';
import { Login } from 'components/Login/Login';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader';

import { RiSearch2Line } from 'react-icons/ri';

// rgba(250, 250, 250, 0.6)

export const SharedLayout = () => {
  return (
    <MainWrapper>
      <div>
        <HeaderContainer>
          <Logo>
            <Link to="/">book library</Link>
          </Logo>

          <Navigation>
            <nav>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/search">
                <SearchLink>
                  Search
                  <RiSearch2Line size="25px" />
                </SearchLink>
              </StyledLink>

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
