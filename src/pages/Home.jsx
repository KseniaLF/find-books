// import { Header } from 'components/main/Header/Header';
// import { fetch } from 'fetch';
import { useEffect, useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

// import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { BookList } from 'components/BooksList/BooksList';
import { useSearchParams } from 'react-router-dom';
import { getSearchBook } from 'fetch';
// import { SliderBlock } from 'components/Slider/Slider';
// import { CardWrapper } from 'components/CardWrapper/CardWrapper';
import { Container } from 'components/App/App.styled';
// import { getSearchBook } from 'fetch';
// import { Loader } from 'components/Loader';

const Home = () => {
  const [books, setBooks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const initialName = searchParams.get('name') ?? '';
  const [bookName, setBookName] = useState(initialName);
  // const [bestsellers, setBestsellers] = useState([]);
  // const location = useLocation();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetch();
  //       // console.log(data);
  //       if (data) {
  //         // setBestsellers(data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const updateQueryString = e => {
  //   const name = e.target.value;
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

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
        // else {
        //   const data = await fetch();
        //   // console.log(data);

        //   if (data) {
        //     setBooks(data);
        //     // setIsLoading(false);
        //   }
        // }
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
    <Container>
      <SearchBox
        // books={books}
        getVisibleBooks={handleVisibleBooks}
        // onChange={updateQueryString}
      />

      {/* {books.length === 0 && <SliderBlock books={bestsellers} />} */}

      {/* {books.map(book => {
        // console.log(book.primary_isbn10);
        return (
          <li key={book.etag}>
            <Link to={`${book.id}`} state={{ from: location }}>
              <CardWrapper book={book} />
            </Link>
          </li>
        );
      })} */}
      <BookList books={books} />
      {/* <img src={require('img/main.gif')} alt="main" /> */}

      {/* {books.length !== 0 && <BookList books={books} />} */}

      {/* <InfiniteScroll
        dataLength={books.length}
        next={this.fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      > */}

      {/* </InfiniteScroll> */}
      {/* <SearchB /> */}
      {/* <SearchBox bookName={bookName} onChange={updateQueryString} />
      {isLoading && <Loader />}
      {!isLoading && books.length !== 0 && <BookList books={books} />} */}
    </Container>
  );
};

export default Home;
