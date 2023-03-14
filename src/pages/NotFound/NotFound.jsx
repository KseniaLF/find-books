import { Container } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <p>Not found</p>
      {/* <Gif title="404" src="https://giphy.com/embed/UHAYP0FxJOmFBuOiC2" /> */}
      <figure>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/dfecc576655687.5c7533af7527f.gif"
          alt="https://www.behance.net/tatianakawkaw"
          title="https://www.behance.net/tatianakawkaw"
        />
        <figcaption>This animated GIF is amazing</figcaption>
      </figure>
    </Container>
  );
};
export default NotFound;
