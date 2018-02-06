import { createActions } from 'redux-actions';
import { push } from 'react-router-redux';

export const actionsCreator = createActions({
  REGISTRATION: {
    REQUEST: user => ({ user }),
    REQUEST_SUCCESS: ({ token }) => ({ token }),
    REQUEST_FAIL: ({ errors }) => ({ errors }),
  },
  LOGIN: {
    REQUEST: user => ({ user }),
    REQUEST_SUCCESS: ({ token }) => ({ token }),
    REQUEST_FAIL: ({ errors }) => ({ errors }),
  },
});

export const register = user => (dispatch, getState, api) => {
  dispatch(actionsCreator.registration.request(user));
  return api.userRegistrationRequest(user)
    .then((response) => {
      if (response.success) {
        dispatch(actionsCreator.registration.requestSuccess(response));
        localStorage.setItem('token', response.token);
        return push('/dashboard');
      }
      return dispatch(actionsCreator.registration.requestFail(response));
    });
};

export const login = user => (dispatch, getState, api) => {
  dispatch(actionsCreator.login.request(user));
  return api.userLoginRequest(user)
    .then((response) => {
      if (response.success) {
        dispatch(actionsCreator.login.requestSuccess(response));
        localStorage.setItem('token', response.token);
        return push('/dashboard');
      }
      return dispatch(actionsCreator.login.requestFail(response));
    });
};
