import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import AuthorBooks from '../components/AuthorBooks/AuthorBooks';

class AuthorsPage extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:4040/authors?_embed=books',
    );

    this.setState({ authors: response.data });
  }

  render() {
    return (
      <>
        <h1>Authors page</h1>

        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink
                className="NavLink"
                activeClassName="ActiveNavlink"
                to={`${this.props.match.url}/${author.id}`}
              >
                {author.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Route
          path="/authors/:authorId"
          render={props => {
            const authorId = Number(props.match.params.authorId);
            const author = this.state.authors.find(
              author => author.id === authorId,
            );

            return author && <AuthorBooks {...props} books={author.books} />;
          }}
        />

      </>
    );
  }
}

export default AuthorsPage;
