import axios from 'axios';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoError,
} from './todos-actions';

// axios.defaults.baseURL = 'https://61b07b553c954f001722a3ec.mockapi.io/contacts';

export const fetchTodos = () => dispatch => {
  dispatch(fetchTodoRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchTodoSuccess(data)))
    .catch(error => dispatch(fetchTodoError(error)));
};

export const addTodo = text => dispatch => {
  const todo = {
    text,
    completed: false,
  };

  dispatch(addTodoRequest());

  axios
    .post('/contacts', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

export const deleteTodo = id => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteTodoSuccess(id)))
    .catch(error => dispatch(deleteTodoError(error)));
};

export const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .put(`/contacts/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(toggleCompletedError(error)));
  };
