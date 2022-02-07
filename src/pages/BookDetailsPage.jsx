import React, { Component } from 'react';
import axios from 'axios';

class BookDetailsPage extends Component {
  initialValue = {
    authorId: null,
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
  };

  state = { ...this.initialValue };

  async componentDidMount() {
    const response = await axios.get(
      `http://localhost:4040/books/${this.props.match.params.bookId}`,
    );

    this.setState({ ...response.data });
  }

  render() {
    return (
      <>
        <h1>Book Details: Book N{this.props.match.params.bookId} </h1>
        <img src={this.state.imgUrl} alt={this.state.title} />
        <h3>{this.state.title}</h3>
        <p>{this.state.descr}</p>
      </>
    );
  }
}

export default BookDetailsPage;
