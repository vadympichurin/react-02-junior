import React from "react";
import PropTypes from "prop-types";

import Painting from "../Painting/Painting";

const PaintingList = ({ paintings }) => {
  return (
    <ul>
      {paintings.map((painting) => (
        <Painting
          key={painting.id}
          link={painting.url}
          title={painting.title}
          price={painting.price}
          quantity={painting.quantity}
          author={painting.author}
        />
      ))}
    </ul>
  );
};

PaintingList.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default PaintingList;
