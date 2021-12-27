import React from "react";

const Painting = ({ link, title, price, quantity }) => {
  //   const { link, title, price } = props;

  return (
    <div>
      <img
        src={link}
        alt={title}
        // width={480}
        width="480"
      />
      <h2>{title}</h2>
      <p>Цена: {price} денег</p>
      <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

export default Painting;
