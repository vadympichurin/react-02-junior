import React from 'react';
import shortid from 'shortid';

class Form extends React.Component {
  state = {
    name: '',
    tag: '',
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitHandler(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  render() {
    const { name, tag } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <br />

        <label htmlFor={this.nameInputId}>Імя</label>

        <input
          type="text"
          value={name}
          onChange={this.handleChange}
          name="name"
          id={this.nameInputId}
        />

        <br />
        <br />

        <label htmlFor={this.tagInputId}>Прозвище </label>
        <input
          type="text"
          value={tag}
          onChange={this.handleChange}
          name="tag"
          id={this.tagInputId}
        />

        <br />

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
