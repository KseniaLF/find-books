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
            // width={135}
          />
        ) : (
          <img src={defaultImg} alt="book" width={135} />
        )}
      </WrapperBookImg>
      {/* <span>Это пример изображения</span> */}

      <p title={book.volumeInfo.title}> {book.volumeInfo.title}</p>
    </CardWrapperBlock>
  );
};
