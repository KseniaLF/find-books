import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchBook } from 'fetch';

import { SearchBox } from 'components/SearchBox/SearchBox';
import { BookList } from 'components/BooksList/BooksList';
import { Container } from 'components/App/App.styled';

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const initialName = searchParams.get('name') ?? '';
  const [bookName, setBookName] = useState(initialName);

  useEffect(() => {
    // setIsLoading(true);

    const fetchData = async () => {
      try {
        if (bookName) {
          const data = await getSearchBook(bookName);
          console.log(data);
          if (data) {
            setBooks(data);
            // setIsLoading(false);
            return;
          }
          return setBooks([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [bookName]);

  const handleVisibleBooks = value => {
    console.log(value);
    setBookName(value);
  };

  return (
    <Container>
      <SearchBox getVisibleBooks={handleVisibleBooks} />
      <BookList books={books} />
    </Container>
  );
};

export default SearchPage;
