import { Link, useLocation } from 'react-router-dom';

import {
  CardWrapper,
  Container,
  List,
  ProductName,
} from 'components/BooksList/BookList.styled';

export const TrendingList = ({ books }) => {
  const location = useLocation();

  // console.log(books);

  return (
    <List>
      {books.map(book => {
        // console.log(book.primary_isbn10);
        return (
          <li key={book.primary_isbn10}>
            <Link
              to={`books/${book.primary_isbn10}`}
              state={{ from: location }}
            >
              <div>
                <img src={book.book_image} alt="book" />
              </div>
              <p>{book.title}</p>
            </Link>

            {/* <p>author: {book.author}</p>
            <p>contributor : {book.contributor}</p>
            <p>description : {book.description}</p>
            <p>publisher: {book.publisher}</p> */}
          </li>
        );
        // const book = book_details[0];
        // return (
        //   <li key={book.primary_isbn10}>
        //     <p>{book.title}</p>
        //     <p>author: {book.author}</p>
        //     <p>contributor : {book.contributor}</p>
        //     <p>description : {book.description}</p>
        //     <p>publisher: {book.publisher}</p>
        //   </li>
        //   // <CardWrapper key={book.id}>
        //   //   <Link to={`${book.id}`} state={{ from: location }}>
        //   //     <div>
        //   //       {/* <img src="https://via.placeholder.com/200x100" alt="" /> */}
        //   //       <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
        //   //     </div>
        //   //     <ProductName>{book.volumeInfo.title}</ProductName>
        //   //   </Link>
        //   // </CardWrapper>
        // );
      })}
    </List>
  );
};
