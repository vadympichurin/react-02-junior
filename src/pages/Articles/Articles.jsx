import React, { Component } from 'react';

import SearchForm from '../../components/SearchForm/SearchForm';
import { fetchArticles } from '../../api/news-api';

class Articles extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getArticles();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  getArticles = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    fetchArticles(options)
      .then(articles =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { articles, isLoading } = this.state;
    const shouldRenderLoadMoreBtn = articles.length > 0 && !isLoading;

    return (
      <>
        <h1>Articles</h1>
        <SearchForm onSubmit={this.onChangeQuery} />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>

        {isLoading && <h2>Loading...</h2>}

        {shouldRenderLoadMoreBtn && (
          <button type="button" onClick={this.getArticles}>
            Load more
          </button>
        )}
      </>
    );
  }
}

export default Articles;
