import { Header } from 'components/main/Header/Header';
import { TrendingList } from 'components/TrendingList/TrendingLst';
import { fetch } from 'fetch';
import { useEffect, useState } from 'react';

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch();
      // console.log(data);
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
      <Header />
      <h2>Best Sellers:</h2>
      <TrendingList books={books} />
    </main>
  );
};

export default Home;
