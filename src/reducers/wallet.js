import { GET_CURRENCIES, SET_EXPENSES, UPDATE_EXPENSES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (
  state = INITIAL_STATE,
  { type, currencies, expenses, updatedExpenses },
) => {
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

  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: updatedExpenses,
    };

  default:
    return state;
  }
};

export default walletReducer;
