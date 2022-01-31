import React from 'react';
import axios from 'axios';

import TodoList from '../../components/todoList/TodoList';
import TodoEditor from '../../components/todoList/TodoEditor';
import Filter from '../../components/Filter/Filter';
import Modal from '../../components/Modal/Modal';
import IconButton from '../../components/IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../static/icons/add.svg';

import {
  getTodos,
  handleAddTodo,
  onDeleteTodo,
  updateTodo,
} from '../../api/todos-api';

class TodoPage extends React.Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
    error: null,
  };

  componentDidMount() {
    getTodos()
      .then(todos => this.setState({ todos }))
      .catch(error => this.setState({ error }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    if (
      this.state.todos.length > prevState.todos.length &&
      prevState.todos.length !== 0
    ) {
      //   this.toggleModal();
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  addTodo = text => {
    const todo = {
      text,
      completed: false,
    };

    handleAddTodo(todo)
      .then(newTodo => {
        this.setState(prevState => ({
          todos: [...prevState.todos, newTodo],
        }));
        this.toggleModal();
      })
      .catch(error => this.setState({ error }));
  };

  deleteTodo = todoId => {
    onDeleteTodo(todoId)
      .then(() => {
        this.setState(prevState => ({
          todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
      })
      .catch(error => this.setState({ error }));
  };

  todoCheckedToggle = todoId => {
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;
    const update = { completed: !completed };

    updateTodo(todoId, update)
      .then(data => {
        this.setState(({ todos }) => ({
          todos: todos.map(todo => (todo.id === data.id ? data : todo)),
        }));
      })
      .catch(error => this.setState({ error }));
  };

  formSubmitHandler = data => {
    console.log('data : ', data);
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { todos, filter, showModal, error } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    const normalizedFilter = filter.toLowerCase();
    const filteredTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor addTodo={this.addTodo} />
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}

        <IconButton onClick={this.toggleModal}>
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        <div>
          <p>Загальна кількість todo: {todos.length}</p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>

        { error && <h1>{error.message}</h1> }

        <br />
        <br />

        <Filter filter={filter} changeFilter={this.handleChangeFilter} />

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          toggleHandler={this.todoCheckedToggle}
        />
      </>
    );
  }
}

export default TodoPage;
