import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const getTodos = () => {
  return axios.get('/todos').then(response => response.data);
};

export const handleAddTodo = todo => {
  return axios.post('/todos', todo).then(response => response.data);
};

export const onDeleteTodo = todoId => {
  return axios.delete(`/todos/${todoId}`);
};

export const updateTodo = (todoId, update) => {
  return axios
    .patch(`/todos/${todoId}`, update)
    .then(response => response.data);
};
