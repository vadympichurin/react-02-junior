import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AuthorsPage from './pages/AuthorsPage';
import BooksPage from './pages/BooksPage';
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './components/Navigation/Navigation';
import BookDetailsPage from './pages/BookDetailsPage';

const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route path="/books/:bookId" component={BookDetailsPage} />
        <Route path="/books" component={BooksPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

// http://localhost:3000/cfhgvbjhj

export default App;
