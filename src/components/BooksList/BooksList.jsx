import { Link, useLocation } from 'react-router-dom';

import { List } from 'components/BooksList/BookList.styled';
import { CardWrapper } from 'components/CardWrapper/CardWrapper';

export const BookList = ({ books }) => {
  const location = useLocation();

  return (
    <List>
      {books.map(book => {
        // console.log(book.primary_isbn10);
        return (
          <li key={book.etag}>
            <Link to={`${book.id}`} state={{ from: location }}>
              <CardWrapper book={book} />
            </Link>
          </li>
        );
      })}
    </List>
  );
};

// {books.map(book => {
//   // console.log(book.primary_isbn10);
//   return (
//     <li key={book.etag} onClick={handleClickSelect}>
//       <Link to={`${book.id}`} state={{ from: location }}>
//         <CardWrapper book={book} />
//       </Link>
//     </li>
//   );
// })}
