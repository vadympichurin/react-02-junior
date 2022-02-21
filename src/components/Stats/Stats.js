import React from 'react';
import { connect } from 'react-redux';
import './Stats.scss';

const Stats = ({ todos }) => {
  const calculateCompletedTodos = todos => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  return (
    <div className="Stats">
      <p className="Stats__item">
        <span className="Stats__value">{todos.length}</span>
        <span className="Stats__label">Всего</span>
      </p>
      <p className="Stats__item">
        <span className="Stats__value">{calculateCompletedTodos(todos)}</span>
        <span className="Stats__label">Выполнено</span>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos.items,
});

export default connect(mapStateToProps)(Stats);
