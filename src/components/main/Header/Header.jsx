import {
  BooksImg,
  GenresList,
  Quote,
  QuoteContainer,
  SearchBtn,
  SearchBtnLink,
} from './Header.styled';

export const Header = () => {
  return (
    <div>
      <QuoteContainer>
        <Quote>
          “you can get lost in any library, no matter the size. but the more
          lost you are, the more things you'll find.”
        </Quote>
        <p>Millie Florence, Lydia Green Of Mulberry Glen</p>
      </QuoteContainer>

      <SearchBtn>
        <SearchBtnLink to="/books">
          <button type="button">Find your next book now</button>
        </SearchBtnLink>
      </SearchBtn>

      <BooksImg>
        <img src={require('img/book.jpg')} alt="books" />
      </BooksImg>

      <div>
        <GenresList>
          <li>
            <p>Art</p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            dignissimos?
          </li>
          <li>
            <p>Art</p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            dignissimos?
          </li>
          <li>
            <p>Art</p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            dignissimos?
          </li>
          {/* <li>
            <p>Art</p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            dignissimos?
          </li> */}
        </GenresList>
      </div>

      {/* <SearchBox value={productName} onChange={updateQueryString} /> */}

      {/* <figure>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/dfecc576655687.5c7533af7527f.gif"
          alt="https://www.behance.net/tatianakawkaw"
          title="https://www.behance.net/tatianakawkaw"
        />
        <figcaption>This animated GIF is amazing</figcaption>
      </figure> */}
    </div>
  );
};
