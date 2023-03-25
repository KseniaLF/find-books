// import { Header } from 'components/main/Header/Header';
import { fetch } from 'fetch';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { BookList } from 'components/BooksList/BooksList';
import { getSearchBook } from 'fetch';

const Home = () => {
  const [books, setBooks] = useState([]);

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
    const fetchData = async () => {
      try {
        if (bookName) {
          const data = await getSearchBook(bookName);
          // console.log(data);
          if (data) {
            return setBooks(data);
          }
          return setBooks([]);
        } else {
          const data = await fetch();
          // console.log(data);

          if (data) {
            return setBooks(data);
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
      {books.length !== 0 && <BookList books={books} />}
      {/* <Header /> */}
      {/* <h2>Best Sellers:</h2>
      <TrendingList books={books} /> */}
    </main>
  );
};

export default Home;
