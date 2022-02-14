import React, { Component } from 'react';
import axios from 'axios';
import routes from '../routes';

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

  handleGoBack = () => {
    const { location, history } = this.props;

    // if(location.state && location.state.from){
    //   return history.push(location.state.from);
    // }

    // history.push(routes.books);

    history.push(location?.state?.from || routes.books);
  }

  render() {
    const { location } = this.props;
    console.log(location);

    return (
      <>
        <h1>Book Details: Book N{this.props.match.params.bookId} </h1>
        <button
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        <img src={this.state.imgUrl} alt={this.state.title} />
        <h3>{this.state.title}</h3>
        <p>{this.state.descr}</p>
      </>
    );
  }
}

export default BookDetailsPage;
