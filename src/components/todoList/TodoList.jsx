import React from 'react';

import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(todo => (
        <li key={todo.id} className={styles.TodoList__item}>
          <p className={styles.TodoList__text}>{todo.text}</p>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
