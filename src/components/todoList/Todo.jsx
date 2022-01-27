import React from 'react';

import IconButton from '../IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../static/icons/delete.svg';
import styles from './TodoList.module.css';

const Todo = ({ completed, text, toggleHandler, onDelete }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleHandler}
      />
      <p className={styles.TodoList__text}>{text}</p>
      {/* <button onClick={onDelete}>Delete</button> */}
      <IconButton onClick={onDelete} >
        <DeleteIcon width="30" height="30" fill="#fff" />
      </IconButton>
    </>
  );
};

export default Todo;
