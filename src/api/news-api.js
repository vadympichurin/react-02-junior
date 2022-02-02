import axios from 'axios';

axios.defaults.baseURL = 'https://newsapi.org/v2';
axios.defaults.headers.common['Authorization'] =
  'Bearer 01b61f75267d43e69f7416bcb60a0a05';

export const fetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
}) => {
  return axios
    .get(
      `/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    )
    .then(response => response.data.articles);
};
