import { CollectionButtons } from 'components/CollectionButtons/CollectionButtons';
import {
  CardWrapperBlock,
  Wrapper,
  WrapperBookImg,
} from './CardWrapper.styled';

import defaultImg from '../../img/bookPlaceholder.png';

export const CardWrapper = ({ book }) => {
  return (
    <CardWrapperBlock>
      <Wrapper>
        <div>
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
        </div>

        {/* <div>
          <img src={defaultImg} alt="book" width={128} />
        </div> */}

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

      <CollectionButtons />
    </CardWrapperBlock>
  );
};
