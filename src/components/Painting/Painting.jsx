import React from "react";
import PropTypes from "prop-types";

import defaultImage from "../../static/default.jpg";

import './Painting.css';

const Painting = ({ link, title, price, quantity, author }) => {
  //   const { link, title, price } = props; // деструктуризация объекта props

  return (
    <li className="Painting">
      <img
        src={link}
        alt={title}
        // width={480}
        width="480"
      />
      <h2>{title}</h2>
      <p>Цена: {price} денег</p>
      <p>
        Автор: <a href={author.url}>{author.tag}</a>
      </p>
      <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p>
      <button type="button">Добавить в корзину</button>
    </li>
  );
};

Painting.defaultProps = {
  link: defaultImage,
};

Painting.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  author: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default Painting;
