import React, { Component } from 'react';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    showModal: false,
  };

  // componentDidMount() {
  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextTodos = this.state.todos;
  //   const prevTodos = prevState.todos;

  //   if (nextTodos !== prevTodos) {
  //     localStorage.setItem('todos', JSON.stringify(nextTodos));
  //   }
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <div style={barStyles}>
          {/* <Filter value={filter} onChange={this.changeFilter} /> */}
          <Filter />
          {/* <Stats total={totalTodoCount} completed={completedTodoCount} /> */}
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
        </div>

        {/* <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <TodoEditor onSubmit={this.addTodo} /> */}
            <TodoEditor toggleModal={this.toggleModal} />
          </Modal>
        )}
      </Container>
    );
  }
}

export default TodosView;
