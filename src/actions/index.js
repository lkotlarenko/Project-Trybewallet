import { USER_LOGIN, GET_CURRENCIES, SET_EXPENSES } from './actionTypes';
import fetchData from '../api/currency';

export const getLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const response = await fetchData();
    const currencies = Object.keys(response).filter((currency) => currency !== 'USDT');
    dispatch(getCurrencies(currencies));
  } catch (error) {
    console.error(error);
  }
};

export const setExpenses = (expenses) => ({
  type: SET_EXPENSES,
  expenses,
});

export const addExpenses = (expenses) => async (dispatch) => {
  try {
    const response = await fetchData();
    const newExpenses = {
      ...expenses,
      exchangeRates: response,
    };
    dispatch(setExpenses(newExpenses));
  } catch (error) {
    console.error(error);
  }
};
