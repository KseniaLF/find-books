import { Wrapper, Icon, Input } from './SearchBox.styled';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchBook } from 'fetch';
import { nanoid } from 'nanoid';

export const SearchBox = ({ getVisibleBooks }) => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const bookName = searchParams.get('name') ?? '';
  const [isOpen, setIsOpen] = useState(true);

  const [books, setBooks] = useState([]);

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
    getVisibleBooks(bookName);
    // hlandleSearch(bookName);
    // getVisibleBooks(books);
  };

  const handleChangeInput = e => {
    // console.log('handleChangeInput:');
    // e.target.value;
    const name = e.target.value;
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);

    const fetchData = async () => {
      try {
        if (name) {
          const data = await getSearchBook(name);
          // console.log(data);
          if (data) {
            return setBooks(data);
          }
          return setBooks([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  return (
    <Wrapper>
      <Icon />
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="find book..."
          debounceTimeout={500}
          autoFocus
          type="text"
          value={bookName}
          onChange={handleChangeInput}
          onClick={handleInputClick}
        />
        {bookName && isOpen ? (
          <ul>
            {books.map(book => {
              return (
                <li key={nanoid()}>
                  {/* {book.volumeInfo.title} */}
                  <Link to={`${book.id}`} state={{ from: location }}>
                    {book.volumeInfo.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </form>
    </Wrapper>
  );
};
