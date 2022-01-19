import React from 'react';
import shortid from 'shortid';

class Form extends React.Component {
  state = {
    name: '',
    tag: '',
    roomClass: 'standard',
    licence: false,
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

  handleLicence = event => {
    this.setState({ licence: event.currentTarget.checked });
  }

  resetForm = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  render() {
    const { name, tag, roomClass, licence } = this.state;

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

        <h3>Класс комнаты: </h3>
        <label>
          Standard
          <input
            type="radio"
            name="roomClass"
            value="standard"
            onChange={this.handleChange}
            checked={roomClass === 'standard'}
          />
        </label>
        <label>
          Double room
          <input
            type="radio"
            name="roomClass"
            value="doubleRoom"
            onChange={this.handleChange}
            checked={roomClass === 'doubleRoom'}
          />
        </label>
        <label>
          Superior
          <input
            type="radio"
            name="roomClass"
            value="superior"
            onChange={this.handleChange}
            checked={roomClass === 'superior'}
          />
        </label>
        <label>
          Lux
          <input
            type="radio"
            name="roomClass"
            value="lux"
            onChange={this.handleChange}
            checked={roomClass === 'lux'}
          />
        </label>

        <br />
        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={licence}
            onChange={this.handleLicence}
          />{' '}
          Согласен работать за еду
        </label>

        <br />
        <br />
        <button type="submit" disabled={!licence}>Send</button>
      </form>
    );
  }
}

export default Form;
