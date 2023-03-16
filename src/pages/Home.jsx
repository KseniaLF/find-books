// import { useSearchParams } from 'react-router-dom';
// import { getProducts } from 'fakeApi';
// import { SearchBox } from 'components/SearchBox/SearchBox';
// import { BookList } from 'components/BooksList/BooksList';
import { Header } from 'components/main/Header/Header';
// import { fetch } from 'fetch';
// import { useEffect, useState } from 'react';

const Home = () => {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch();
  //     console.log(data);
  //     setBooks(data);
  //   };

  //   try {
  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  // fetch();
  // const books = getProducts();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get('name') ?? '';

  // const visibleProducts = books.filter(book =>
  //   book.name.toLowerCase().includes(productName.toLowerCase())
  // );

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <main>
      <Header />

      {/* <BookList books={books} /> */}
    </main>
  );
};

export default Home;
