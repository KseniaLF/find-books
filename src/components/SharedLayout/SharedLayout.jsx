import { Suspense } from 'react';
import { Container, StyledLink } from 'components/App/App.styled';
import { Link, Outlet } from 'react-router-dom';
import { Logo, Navigation } from './SharedLayout.styled';
import { Login } from 'components/Login/Login';
import { Footer } from 'components/Footer/Footer';
import { ThreeDots } from 'react-loader-spinner';

export const SharedLayout = () => {
  return (
    <div>
      <Container>
        <header>
          <Logo>
            <Link to="/">library</Link>

            {/* <img src={require('img/logo.png')} alt="logo" width={90} /> */}
          </Logo>

          <Navigation>
            <nav>
              <StyledLink to="/">Home</StyledLink>
              {/* <StyledLink to="/about">About</StyledLink> */}
              <StyledLink to="/books">Collection</StyledLink>
            </nav>

            <Login />
          </Navigation>
        </header>

        <Suspense
          fallback={
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#000000"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </Container>

      <Footer />
    </div>
  );
};
