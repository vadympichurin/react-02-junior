import React, { Component } from 'react';
import axios from 'axios';

class AuthorsPage extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:4040/authors');

    this.setState({ authors: response.data });
  }

  render() {
    return (
      <>
        <h1>Authors page</h1>
        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>{author.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default AuthorsPage;
