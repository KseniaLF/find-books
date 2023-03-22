import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import BookDetails from 'pages/BookDetails';

const Home = lazy(() => import('pages/Home'));

const SearchPage = lazy(() => import('pages/SearchPage'));
// const ProductDetails = lazy(() => import('pages/ProductDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="books/:id" element={<BookDetails />} />*/}

          {/* <Route path="about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}

          <Route path="books" element={<SearchPage />} />
          <Route path="books/:id" element={<BookDetails />} />

          {/* <Route path="collection" element={<Collection />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
