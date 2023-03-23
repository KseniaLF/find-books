// import { Gif } from 'pages/NotFound/NotFound.styled';
// import { BookContainer, BookImg, FeaturesList } from './Book.styled';

export const Book = ({ book }) => {
  // console.log(book);
  return (
    <div>
      <h2>{book.title}</h2>
      {book.imageLinks.medium ? (
        <img src={book.imageLinks.medium} width={400} alt="book" />
      ) : (
        <img src={book.imageLinks.thumbnail} width={150} alt="book" />
      )}
      {/* <img src={book.imageLinks.medium} width={400} alt="book" /> */}
      {/* <BookContainer> */}
      {/* <BookImg>
          <img src={book.imageLinks.thumbnail} alt={book.title} width={300} />
        </BookImg> */}

      {/* <FeaturesList>
          <li>
            Authors:{' '}
            {book.authors.map(i => (
              <span key={i}>{i}. </span>
            ))}
          </li>
          <li>Rating: {book.averageRating}/5</li>
          <li>Published date: {book.publishedDate}</li>
          <li>Page count: {book.pageCount}</li>
          <li>
            Categories:
            {book.categories.map(i => (
              <p key={i}>{i} </p>
            ))}
          </li>
        </FeaturesList> */}
      {/* <Gif title="404" src="https://giphy.com/embed/t7gErJuy2B6Lzd5535" />
      </BookContainer> */}
      {/* <p>Description: </p>
      <div dangerouslySetInnerHTML={{ __html: `${book.description}` }} /> */}
      {/* ReactHtmlParser - более безопасная альтернатива */}
    </div>
  );
};
