import { Link, useLocation } from 'react-router-dom';

import { List } from 'components/BooksList/BookList.styled';
import { CardWrapper } from 'components/CardWrapper/CardWrapper';

export const BookList = ({ books }) => {
  const location = useLocation();

  console.log(books);

  return (
    <List>
      {books.map(book => {
        // console.log(book.primary_isbn10);
        return (
          <li key={book.etag}>
            <Link to={`${book.id}`} state={{ from: location }}>
              {/* <div>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
                <p> {book.volumeInfo.title}</p>
              </div>

              <div>info about book</div> */}
              <CardWrapper book={book} />
            </Link>
          </li>
        );
      })}
    </List>
  );
};
