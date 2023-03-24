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

export const Book = ({ book }) => {
  // console.log(book);

  const dateParse = Date.parse(book.publishedDate);
  const getYear = new Date(dateParse).getFullYear();

  return (
    <div>
      <BookContainer>
        <BookImg>
          <BookImgBlock>
            {book.imageLinks?.large && <Image src={book.imageLinks.large} />}
            {/* 
            {!book.imageLinks?.thumbnail && book.imageLinks?.thumbnail && (
              <Image src={book.imageLinks.thumbnail} />
            )} */}

            {!book.imageLinks?.medium && book.imageLinks?.thumbnail && (
              <Image src={book.imageLinks.thumbnail} width={140} alt="book" />
            )}

            {!book.imageLinks?.large &&
              !book.imageLinks?.medium &&
              !book.imageLinks?.thumbnail && (
                <Image src={defaultImg} alt="book" />
              )}
          </BookImgBlock>

          {/* <div>
            {book.imageLinks?.medium && (
              <img src={book.imageLinks.medium} alt="book" />
            )}

            {!book.imageLinks?.medium && book.imageLinks?.thumbnail && (
              <img src={book.imageLinks.thumbnail} width={135} alt="book" />
            )}

            {!book.imageLinks?.medium && !book.imageLinks?.thumbnail && (
              <img src={defaultImg} alt="book" />
            )}
          </div> */}
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
            <YourRating isbnBook={book.industryIdentifiers[0].identifier} />
          </RatingList>

          <SynopsisList>
            {/* <li>
              Rating: <p>{book.averageRating ? book.averageRating : 0}/5</p>
            </li> */}

            <li>
              Pages: <p>{book.printedPageCount}</p>
            </li>

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
            <div>
              <button type="button">Not in the collection</button>
            </div>
            <div>
              <button type="button">Want to read</button>
            </div>
          </Buttons>
          <BuyButton>
            <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
              Buy this e-book
            </a>
          </BuyButton>
        </BookInfoBlock>

        {/* <Gif title="404" src="https://giphy.com/embed/t7gErJuy2B6Lzd5535" />
      </BookContainer> */}
        {/* <p>Description: </p>
      <div  ={{ __html: `${book.description}` }} /> */}
        {/* ReactHtmlParser - более безопасная альтернатива */}
      </BookContainer>

      <Description>Description: </Description>
      <div dangerouslySetInnerHTML={{ __html: `${book.description}` }} />
    </div>
  );
};
