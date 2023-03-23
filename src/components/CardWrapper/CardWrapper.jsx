import { CardWrapperBlock, Wrapper } from './CardWrapper.styled';

export const CardWrapper = ({ book }) => {
  return (
    <CardWrapperBlock>
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
    </CardWrapperBlock>
  );
};
