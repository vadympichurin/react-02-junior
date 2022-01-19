import React from 'react';

import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, toggleHandler }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(({ id, completed, text }) => (
        <li key={id} className={styles.TodoList__item}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleHandler(id)}
          />
          <p className={styles.TodoList__text}>{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
