import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, toggleHandler }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(({ id, completed, text }) => (
        <li key={id} className={styles.TodoList__item}>
          <Todo
            completed={completed}
            text={text}
            toggleHandler={() => toggleHandler(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
