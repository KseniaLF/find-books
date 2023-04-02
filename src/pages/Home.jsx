// import { Header } from 'components/main/Header/Header';
// import { fetch } from 'fetch';
import { useEffect, useState } from 'react';

// import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { BookList } from 'components/BooksList/BooksList';
import { useSearchParams } from 'react-router-dom';
import { fetch, getSearchBook } from 'fetch';
// import { getSearchBook } from 'fetch';
// import { Loader } from 'components/Loader';

const Home = () => {
  const [books, setBooks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const initialName = searchParams.get('name') ?? '';
  const [bookName, setBookName] = useState(initialName);

  // const updateQueryString = e => {
  //   const name = e.target.value;
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  useEffect(() => {
    console.log(0);
    // setIsLoading(true);

    const fetchData = async () => {
      try {
        if (bookName) {
          const data = await getSearchBook(bookName);
          // console.log(data);
          if (data) {
            setBooks(data);
            // setIsLoading(false);
            return;
          }
          return setBooks([]);
        } else {
          const data = await fetch();
          // console.log(data);

          if (data) {
            setBooks(data);
            // setIsLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [bookName]);

  const handleVisibleBooks = value => {
    console.log(value);
    // setBooks(value);
    setBookName(value);
  };

  return (
    <main>
      <SearchBox
        // books={books}
        getVisibleBooks={handleVisibleBooks}
        // onChange={updateQueryString}
      />

      {books.length !== 0 && <BookList books={books} />}
      {/* <SearchB /> */}
      {/* <SearchBox bookName={bookName} onChange={updateQueryString} />
      {isLoading && <Loader />}
      {!isLoading && books.length !== 0 && <BookList books={books} />} */}
    </main>
  );
};

export default Home;
