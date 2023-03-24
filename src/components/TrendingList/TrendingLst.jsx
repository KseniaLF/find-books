import { Link, useLocation } from 'react-router-dom';

import { List } from 'components/BooksList/BookList.styled';
import { CardWrapper } from 'components/CardWrapper/CardWrapper';

export const TrendingList = ({ books }) => {
  const location = useLocation();

  // console.log(books);

  return (
    <List>
      {books.map(book => {
        // console.log(book);
        return (
          <li key={book.id}>
            <Link to={`books/${book.id}`} state={{ from: location }}>
              <CardWrapper book={book} />
              {/* <CardWrapper>
                <Wrapper>
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />

                  <div>
                    <b> {book.volumeInfo.title}</b>
                    <p>author: {book.volumeInfo.authors}</p>
                    <p>categories : {book.volumeInfo.categories}</p>
                    <p>pageCount: {book.volumeInfo.pageCount}</p>
                    <p>publishedDate: {book.volumeInfo.publishedDate}</p>
                    <p>publisher: {book.volumeInfo.publisher}</p>
                    <p>language: {book.volumeInfo.language}</p>
                  </div>
                </Wrapper>

                <div>
                  <div>
                    <button type="button">Not in the library</button>
                  </div>
                  <div>
                    <button type="button">Want to read</button>
                  </div>
                </div>
              </CardWrapper> */}
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
