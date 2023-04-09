import { Link, useLocation } from 'react-router-dom';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  List,
  // SliderItem,
  // SliderWrapper,
} from 'components/BooksList/BookList.styled';
import { CardWrapper } from 'components/CardWrapper/CardWrapper';
// import { SliderBlock } from 'components/Slider/Slider';
// import { useEffect } from 'react';
// import { useState } from 'react';

export const BookList = ({ books }) => {
  const location = useLocation();

  return (
    <>
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
    </>
  );
};
