import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todos/todos-actions';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message === '') {
      alert('Please type your todo!');
      return;
    }

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
    this.props.toggleModal();
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Сохранить
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
