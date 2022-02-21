import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleCompleted } from '../../redux/todos/todos-actions';
import classNames from 'classnames';
import Todo from '../Todo';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

const getVisibleTodos = (todos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return todos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.todos;

  return {
    todos: getVisibleTodos(items, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(deleteTodo(id)),
  onToggleCompleted: id => dispatch(toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
