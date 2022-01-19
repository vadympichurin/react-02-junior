import React from 'react';

const Filter = ({ filter, changeFilter }) => (
  <label>
    Фильтр туду
    <input type="text" value={filter} onChange={changeFilter} />
  </label>
);

export default Filter;