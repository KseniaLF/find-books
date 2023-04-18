// import { Gif } from 'pages/NotFound/NotFound.styled';
import ShowMoreText from 'react-show-more-text';
import {
  BookContainer,
  BookImg,
  BookInfo,
  Italic,
  OptionBlock,
  RateBlock,
} from './Book.styled';
import defaultImg from '../../img/bookPlaceholder.png';
import { Rating, YourRating } from 'components/Rating/Rating';
import { Image } from 'antd';

import parse from 'html-react-parser';
// import { Button } from 'components/Button/Button';
import { Review } from 'components/Review/Review';
import { Button } from 'components/Button/Button';
import { useParams } from 'react-router-dom';

export const Book = ({ book }) => {
  const { id } = useParams();
  // console.log(id);

  const dateParse = Date.parse(book.publishedDate);
  // const getYear = new Date(dateParse).getFullYear();
  const getDate = new Date(dateParse).toLocaleDateString();

  return (
    <>
      <BookContainer>
        <BookImg>
          <div>
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
          </div>

          <OptionBlock>
            <Button>
              <button type="button">Want to read</button>
            </Button>

            <Button>
              <a
                href={book.infoLink}
                title="https://play.google.com/store/books"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">Buy this e-book</button>
              </a>
            </Button>

            <YourRating id={id}>Rate this book</YourRating>
          </OptionBlock>
        </BookImg>

        <BookInfo>
          <h1>{book.title}</h1>
          <Italic>{book.authors}</Italic>

          <RateBlock>
            <div>
              <Rating rate={book.averageRating ? book.averageRating : 0} />{' '}
              {book.averageRating ? book.averageRating : 0} / 5
            </div>
            <Italic>{book.ratingsCount ? book.ratingsCount : 0} ratings</Italic>
          </RateBlock>

          <ShowMoreText lines={5} more="Show more" less="Show less">
            {parse(book.description)}
          </ShowMoreText>

          <div>
            <b>Genres:</b> {book.categories}
          </div>

          <div>
            First published <b>{getDate}</b> by <b>{book.publisher}</b>
          </div>

          <div>
            <Italic>Pages: {book.printedPageCount} </Italic>
            <Italic>
              Language: {book.language === 'en' ? 'english' : book.language}
            </Italic>
          </div>
        </BookInfo>
      </BookContainer>

      <Review />
    </>
    // <div>
    //   <BookContainer>
    //     <BookImg>
    //       <BookImgBlock>
    //         {book.imageLinks?.large && (
    //           <Image src={book.imageLinks.large} alt="book" />
    //         )}

    //         {!book.imageLinks?.medium && book.imageLinks?.thumbnail && (
    //           <Image src={book.imageLinks.thumbnail} width={140} alt="book" />
    //         )}

    //         {!book.imageLinks?.large &&
    //           !book.imageLinks?.medium &&
    //           !book.imageLinks?.thumbnail && (
    //             <Image src={defaultImg} alt="book" />
    //           )}
    //       </BookImgBlock>
    //     </BookImg>

    //     <BookInfoBlock>
    //       <p>
    //         Edition {book.title} ({book.publishedDate})
    //       </p>
    //       <h2>{book.title}</h2>

    //       <p>
    //         {book.subtitle ? book.subtitle : 'Novel'} by publisher{' '}
    //         {book.publisher}
    //       </p>

    //       <RatingList>
    //         <Rating rate={book.averageRating ? book.averageRating : 0} />
    //         {book.industryIdentifiers && (
    //           <YourRating isbnBook={book.industryIdentifiers[0].identifier} />
    //         )}
    //       </RatingList>

    //       <SynopsisList>
    //         {book.printedPageCount && (
    //           <li>
    //             Pages: <p>{book.printedPageCount}</p>
    //           </li>
    //         )}

    //         <li>
    //           Language:
    //           <p>{book.language === 'en' ? 'english' : book.language}</p>
    //         </li>

    //         <li>
    //           Year: <p>{getYear}</p>
    //         </li>
    //       </SynopsisList>

    //       <p>Authors: {book.authors}</p>
    //       <p> Categories: {book.categories}</p>

    //       <Buttons>
    //         {/* <div>
    //           <button type="button">Not in the collection</button>
    //         </div> */}
    //         <div>
    //           <button type="button">Add to collection</button>
    //         </div>
    //       </Buttons>

    //       {console.log(book)}
    //       <BuyButton>
    //         <a
    //           href={book.infoLink}
    //           title="https://play.google.com/store/books"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <div>Buy this e-book</div>
    //         </a>
    //       </BuyButton>
    //     </BookInfoBlock>

    //     {/* <Gif title="404" src="https://giphy.com/embed/t7gErJuy2B6Lzd5535" /> */}
    //   </BookContainer>

    //   {book.description && (
    //     <>
    //       <Description>Description: </Description>
    //       {parse(book.description)}
    //     </>
    //   )}
    //   {/* {console.log(parse(book.description)[0])} */}
    // </div>
  );
};
