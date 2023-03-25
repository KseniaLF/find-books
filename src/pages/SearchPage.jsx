// import { useSearchParams } from 'react-router-dom';
// import { SearchBox } from 'components/SearchBox/SearchBox';
// import { useEffect, useState } from 'react';
// import { BookList } from 'components/BooksList/BooksList';
// import { getSearchBook } from 'fetch';

const SearchPage = () => {
  // const [books, setBooks] = useState([]);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const bookName = searchParams.get('name') ?? '';

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  // const visibleBooks = books.filter(book => {
  //   return book.volumeInfo.title.toLowerCase().includes(bookName.toLowerCase());
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (bookName) {
  //         // console.log(bookName);
  //         const data = await getSearchBook(bookName);
  //         // console.log(data);
  //         if (data) {
  //           return setBooks(data);
  //         }
  //         return setBooks([]);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, [bookName]);

  return (
    <>
      <p>Hi, this is your collection</p>
      no books in collection
      {/* <SearchBox bookName={bookName} onChange={updateQueryString} /> */}
      {/* {books.length !== 0 && <BookList books={visibleBooks} />} */}
      {/* {books === null && <p>NO RESULTS</p>} */}
    </>
  );
};
export default SearchPage;
