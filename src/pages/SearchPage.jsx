import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { BookList } from 'components/BooksList/BooksList';
import { getTrendingBooks } from 'fetch';

const SearchPage = () => {
  const [books, setBooks] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const bookName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const visibleBooks = books.filter(book =>
    book.title.toLowerCase().includes(bookName.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrendingBooks();
      // console.log(data.books);
      setBooks(data.books);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // if (books.length !== 0) {
  return (
    <>
      <SearchBox bookName={bookName} onChange={updateQueryString} />
      <BookList books={visibleBooks} />
    </>
  );
  // }
};
export default SearchPage;
