import React from 'react';

const BookPreview = ({ genre, title, imgUrl }) => {
  return (
    <div>
      <img src={imgUrl} alt={title} />
      <h5>{title}</h5>
      <p>{genre}</p>
    </div>
  );
};

export default BookPreview;
