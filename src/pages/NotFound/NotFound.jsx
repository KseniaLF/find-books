import { Container, Gif } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <p>Not found</p>
      <Gif title="404" src="https://giphy.com/embed/UHAYP0FxJOmFBuOiC2" />
    </Container>
  );
};
export default NotFound;
