import React from 'react';

class TodoEditor extends React.Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({ text: e.currentTarget.value });
  };

  resetForm = () => {
      this.setState({ text: '' });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.text);
    this.resetForm();
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={text} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TodoEditor;
