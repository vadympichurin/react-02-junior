import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BookPreview from '../BookPreview/BookPreview';

const BookList = ({ books, location }) => {
  return (
    <ul>
      {books.map(({ id, genre, title, imgUrl }) => (
        <li key={id}>
          <Link 
            // to={`/books/${id}`}
            to={{
              pathname: `/books/${id}`,
              state: {
                from: location.pathname,
              },
            }}
          >
            <BookPreview genre={genre} title={title} imgUrl={imgUrl} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(BookList);
