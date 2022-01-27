import React from 'react';
import shortid from 'shortid';

import TodoList from './components/todoList/TodoList';
import TodoEditor from './components/todoList/TodoEditor';
import Filter from './components/Filter/Filter';
import Modal from './components/Modal/Modal';
import IconButton from './components/IconButton/IconButton';
import { ReactComponent as AddIcon } from './static/icons/add.svg';

// const colors = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
// ];

// const initialTodos = [
//   { id: 'id-1', text: 'Learn React', completed: false },
//   { id: 'id-2', text: 'Learn React Router', completed: true },
//   { id: 'id-3', text: 'Learn Redux', completed: false },
// ];

class App extends React.Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos) {
      this.setState({ todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    if (
      this.state.todos.length > prevState.todos.length &&
      prevState.todos.length !== 0
    ) {
      this.toggleModal();
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      // text: text,
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));

    // this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  todoCheckedToggle = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log('data : ', data);
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { todos, filter, showModal } = this.state;

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

export default App;
