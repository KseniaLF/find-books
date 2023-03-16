import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { BookList } from 'components/BooksList/BooksList';
import { fetch } from 'fetch';

const Collection = () => {
  const [books, setBooks] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const bookName = searchParams.get('name') ?? '';

  const visibleBooks = books.filter(book =>
    book.volumeInfo.title.toLowerCase().includes(bookName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch();
      console.log(data);
      setBooks(data);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <SearchBox value={bookName} onChange={updateQueryString} />
      <BookList books={visibleBooks} />
    </main>
  );
};
export default Collection;
