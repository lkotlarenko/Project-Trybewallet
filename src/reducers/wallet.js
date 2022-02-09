import { GET_CURRENCIES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };

  default:
    return state;
  }
};

export default walletReducer;
