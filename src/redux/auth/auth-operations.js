import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = ' https://connections-api.herokuapp.com';

// const token = {};

export const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest);

  try {
    const response = await axios.post('/users/singup', credentials);

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};
