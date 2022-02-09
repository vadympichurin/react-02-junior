import React from 'react';
import { Link } from 'react-router-dom';

const AuthorBooks = ({ books }) => {
  return (
    <>
      <h1>Страница одного автора</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AuthorBooks;
