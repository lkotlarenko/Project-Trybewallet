import { GET_CURRENCIES, SET_EXPENSES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, { type, currencies, expenses }) => {
  switch (type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies,
    };

  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, expenses],
    };

  default:
    return state;
  }
};

export default walletReducer;
