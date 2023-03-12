import { useSearchParams } from 'react-router-dom';
import { getProducts } from 'fakeApi';
import { ProductList } from 'components/ProductList/ProductList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { BookList } from 'components/BooksList/BooksList';

const Home = () => {
  const books = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = books.filter(book =>
    book.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <BookList products={visibleProducts} />
    </main>
  );
};

export default Home;
