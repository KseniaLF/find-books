// import { Gif } from 'pages/NotFound/NotFound.styled';
import {
  BookContainer,
  BookImg,
  BookImgBlock,
  BookInfoBlock,
  Buttons,
  BuyButton,
  Description,
  RatingList,
  SynopsisList,
} from './Book.styled';
import defaultImg from '../../img/bookPlaceholder.png';
import { Rating, YourRating } from 'components/Rating/Rating';
import { Image } from 'antd';

import parse from 'html-react-parser';

export const Book = ({ book, id }) => {
  console.log(id);

  const dateParse = Date.parse(book.publishedDate);
  const getYear = new Date(dateParse).getFullYear();

  return (
    <div>
      <BookContainer>
        <BookImg>
          <BookImgBlock>
            {book.imageLinks?.large && (
              <Image src={book.imageLinks.large} alt="book" />
            )}

            {!book.imageLinks?.medium && book.imageLinks?.thumbnail && (
              <Image src={book.imageLinks.thumbnail} width={140} alt="book" />
            )}

            {!book.imageLinks?.large &&
              !book.imageLinks?.medium &&
              !book.imageLinks?.thumbnail && (
                <Image src={defaultImg} alt="book" />
              )}
          </BookImgBlock>
        </BookImg>

        <BookInfoBlock>
          <p>
            Edition {book.title} ({book.publishedDate})
          </p>
          <h2>{book.title}</h2>

          <p>
            {book.subtitle ? book.subtitle : 'Novel'} by publisher{' '}
            {book.publisher}
          </p>

          <RatingList>
            <Rating rate={book.averageRating ? book.averageRating : 0} />
            {book.industryIdentifiers && (
              <YourRating isbnBook={book.industryIdentifiers[0].identifier} />
            )}
          </RatingList>

          <SynopsisList>
            {book.printedPageCount && (
              <li>
                Pages: <p>{book.printedPageCount}</p>
              </li>
            )}

            <li>
              Language:
              <p>{book.language === 'en' ? 'english' : book.language}</p>
            </li>

            <li>
              Year: <p>{getYear}</p>
            </li>
          </SynopsisList>

          <p>Authors: {book.authors}</p>
          <p> Categories: {book.categories}</p>

          <Buttons>
            {/* <div>
              <button type="button">Not in the collection</button>
            </div> */}
            <div>
              <button type="button">Add to collection</button>
            </div>
          </Buttons>

          {console.log(book)}
          <BuyButton>
            <a
              href={book.infoLink}
              title="https://play.google.com/store/books"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Buy this e-book</div>
            </a>
          </BuyButton>
        </BookInfoBlock>

        {/* <Gif title="404" src="https://giphy.com/embed/t7gErJuy2B6Lzd5535" /> */}
      </BookContainer>

      {book.description && (
        <>
          <Description>Description: </Description>
          {parse(book.description)}
        </>
      )}
      {/* {console.log(parse(book.description)[0])} */}
    </div>
  );
};
