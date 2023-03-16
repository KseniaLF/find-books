import { Link, useLocation } from 'react-router-dom';

import {
  CardWrapper,
  Container,
  ProductName,
} from 'components/BooksList/BookList.styled';

export const BookList = ({ books }) => {
  const location = useLocation();

  return (
    <Container>
      {books.map(book => {
        return (
          <CardWrapper key={book.id}>
            <Link to={`${book.id}`} state={{ from: location }}>
              <div>
                {/* <img src="https://via.placeholder.com/200x100" alt="" /> */}

                <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
              </div>

              <ProductName>{book.volumeInfo.title}</ProductName>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};
