import { handleActions } from 'redux-actions';
import { actionsCreator } from './../actions';

const reducer = handleActions({
  [actionsCreator.registration.requestSuccess](state, action) {
    return {
      ...state,
      ...action.payload,
      errors: {},
    };
  },
  [actionsCreator.registration.requestFail](state, action) {
    return {
      ...state,
      ...action.payload,
      token: null,
    };
  },
  [actionsCreator.login.requestSuccess](state, action) {
    return {
      ...state,
      ...action.payload,
      errors: {},
    };
  },
  [actionsCreator.login.requestFail](state, action) {
    return {
      ...state,
      ...action.payload,
      token: null,
    };
  },
}, {
  isAuth: null,
  errors: {},
});

export default reducer;
