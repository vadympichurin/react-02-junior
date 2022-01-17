import React from 'react';

import PaintingList from './components/PaintingList/PaintingList';
import Panel from './components/Panel/Panel';
import ColorPicker from './components/colorPicker/ColorPicker';
import Notification from './components/notification/Notification';
import Layout from './components/layout/Layout';
import Counter from './components/counter/Counter';
import Dropdown from './components/dropdown/Dropdown';
import TodoList from './components/todoList/TodoList';
import Form from './components/Form/Form';

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
  { id: 'id-3', text: 'Learn React Redux', completed: false },
];

class App extends React.Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log("data : ", data);
  }

  render() {
    const { todos } = this.state;

    // const completedTodos = todos.filter(todo => todo.completed);
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <>
        <Form onSubmitHandler={this.formSubmitHandler}/>
        <Form onSubmitHandler={this.formSubmitHandler}/>


        {/* <div>
          <p>Загальна кількість todo: {todos.length}</p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
        {/* <ColorPicker colors={colors} /> */}
        {/* <Dropdown /> */}
        {/* <Counter initialValue={10} /> */}
      </>
    );
  }
}

export default App;
