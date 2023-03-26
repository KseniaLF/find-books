import { CardWrapperBlock, WrapperBookImg } from './CardWrapper.styled';

import defaultImg from '../../img/bookPlaceholder.png';

export const CardWrapper = ({ book }) => {
  return (
    <CardWrapperBlock>
      <WrapperBookImg>
        {book.volumeInfo.imageLinks ? (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt="book"
            width={135}
          />
        ) : (
          <img src={defaultImg} alt="book" width={135} />
        )}
      </WrapperBookImg>

      <p> {book.volumeInfo.title}</p>
    </CardWrapperBlock>
  );
};
