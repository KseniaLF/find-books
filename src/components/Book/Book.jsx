import { useParams } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import { Image } from 'antd';
import parse from 'html-react-parser';

import { Review } from 'components/Review/Review';
import { Button } from 'components/Button/Button';
import { Rating, YourRating } from 'components/Rating/Rating';

import {
  BookContainer,
  BookImg,
  BookInfo,
  GenresBlock,
  Italic,
  OptionBlock,
  RateBlock,
} from './Book.styled';
import defaultImg from '../../img/bookPlaceholder.png';

export const Book = ({ book }) => {
  const { id } = useParams();

  const genres = book.categories;
  const uniqueGenres =
    genres &&
    [...new Set(genres.map(category => category.split(' / ')[0]))].join(', ');
  const subgenres =
    genres &&
    [...new Set(genres.map(category => category.split(' / ')[1]))].join(', ');

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
            {/* <Button>
              <button type="button">Want to read</button>
            </Button> */}

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

          {book.description && (
            <ShowMoreText lines={4} more="Show more" less="Show less">
              {parse(book.description)}
            </ShowMoreText>
          )}

          {genres && (
            <GenresBlock>
              <p>
                <b>Genres: </b> {uniqueGenres}
              </p>
              <p>
                <b>Subgenres: </b> {subgenres}
              </p>
            </GenresBlock>
          )}

          <div>
            First published {getDate} by {book.publisher}
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
  );
};
