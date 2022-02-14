import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "home-page" */));
const AuthorsPage = lazy(() => import('./pages/AuthorsPage' /* webpackChunkName: "authors-page" */));
const BooksPage = lazy(() => import('./pages/BooksPage' /* webpackChunkName: "books-page" */));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage' /* webpackChunkName: "notFound-page" */));
const BookDetailsPage = lazy(() => import('./pages/BookDetailsPage' /* webpackChunkName: "bookDetails-page" */));

const App = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.authors} component={AuthorsPage} />
          <Route path={routes.bookDetails} component={BookDetailsPage} />
          <Route path={routes.books} component={BooksPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
