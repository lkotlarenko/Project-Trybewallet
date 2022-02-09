import { USER_LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case USER_LOGIN:
    return {
      ...state,
      email: payload,
    };

  default:
    return state;
  }
};

export default userReducer;
