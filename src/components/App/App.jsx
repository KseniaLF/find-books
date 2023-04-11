import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import BookDetails from 'pages/BookDetails';
const SearchPage = lazy(() => import('pages/SearchPage'));
const Collection = lazy(() => import('pages/Collection'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:id" element={<BookDetails />} />

          {/* <Route path="about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}

          <Route path="collection" element={<Collection />} />
          {/* <Route path="books/:id" element={<BookDetails />} /> */}

          {/* <Route path="collection" element={<Collection />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
