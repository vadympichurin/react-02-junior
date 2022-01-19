import React from 'react';
import shortid from 'shortid';

import PaintingList from './components/PaintingList/PaintingList';
import Panel from './components/Panel/Panel';
import ColorPicker from './components/colorPicker/ColorPicker';
import Notification from './components/notification/Notification';
import Layout from './components/layout/Layout';
import Counter from './components/counter/Counter';
import Dropdown from './components/dropdown/Dropdown';
import TodoList from './components/todoList/TodoList';
import Form from './components/Form/Form';
import TodoEditor from './components/todoList/TodoEditor';
import Filter from './components/Filter/Filter';

import paintings from './paintings.json';

// const colors = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
// ];

const initialTodos = [
  { id: 'id-1', text: 'Learn React', completed: false },
  { id: 'id-2', text: 'Learn React Router', completed: true },
  { id: 'id-3', text: 'Learn Redux', completed: false },
];

class App extends React.Component {
  state = {
    todos: initialTodos,
    filter: '',
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
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // todoCheckedToggle = todoId => {
  //   console.log(todoId);

  //   this.setState(prevState => ({
  //     todos: prevState.todos.map(todo => {
  //       if(todo.id === todoId) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         }
  //       };

  //       return todo;
  //     })
  //   }))
  // };

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
    const { todos, filter } = this.state;

    // const completedTodos = todos.filter(todo => todo.completed);
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
        {/* <Form onSubmitHandler={this.formSubmitHandler}/> */}

        <div>
          <p>Загальна кількість todo: {todos.length}</p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>

        <TodoEditor addTodo={this.addTodo} />
        <br />
        <br />

        <Filter filter={filter} changeFilter={this.handleChangeFilter} />

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          toggleHandler={this.todoCheckedToggle}
        />

        {/* <ColorPicker colors={colors} /> */}
        {/* <Dropdown /> */}
        {/* <Counter initialValue={10} /> */}
      </>
    );
  }
}

export default App;
