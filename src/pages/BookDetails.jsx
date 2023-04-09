import { Container } from 'components/App/App.styled';
import { BackLink } from 'components/BackLink/BackLink';
import { Book } from 'components/Book/Book';
import { getBook } from 'fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/search';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBook(id);
        // console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (book.length === 0) {
    return;
  }

  return (
    <Container>
      <BackLink to={backLinkHref}>Back to books</BackLink>
      <Book book={book} id={id} />
    </Container>
  );
};
export default BookDetails;
