import React, { Component } from 'react';
import axios from 'axios';

import BookList from '../components/BookList/BookList';

class BooksPage extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:4040/books');

    this.setState({ books: response.data });
  }

  render() {
    return (
      <>
        <h1> Books page </h1>
        <BookList books={this.state.books} />
      </>
    );
  }
}

export default BooksPage;
