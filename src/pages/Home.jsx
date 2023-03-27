// import { Header } from 'components/main/Header/Header';
import { fetch } from 'fetch';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { BookList } from 'components/BooksList/BooksList';
import { getSearchBook } from 'fetch';
import { Loader } from 'components/Loader';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const bookName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  // const visibleBooks = books.filter(book => {
  //   if (bookName || bookName === '') {
  //     return book;
  //   }
  //   return book.volumeInfo.title.toLowerCase().includes(bookName.toLowerCase());
  // });

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        if (bookName) {
          const data = await getSearchBook(bookName);
          // console.log(data);
          if (data) {
            setBooks(data);
            setIsLoading(false);
            return;
          }
          return setBooks([]);
        } else {
          const data = await fetch();
          // console.log(data);

          if (data) {
            setBooks(data);
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [bookName]);

  return (
    <main>
      <SearchBox bookName={bookName} onChange={updateQueryString} />
      {isLoading && <Loader />}
      {!isLoading && books.length !== 0 && <BookList books={books} />}
    </main>
  );
};

export default Home;
