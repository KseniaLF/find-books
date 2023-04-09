import { Container } from 'components/App/App.styled';
import { HomeHeader, HomeMain } from 'components/Home/Home';

export const HomePage = () => {
  return (
    <div>
      <HomeHeader />

      <Container>
        <HomeMain>main</HomeMain>
      </Container>
    </div>
  );
};
