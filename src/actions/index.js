import { USER_LOGIN, GET_CURRENCIES } from './actionTypes';

export const getLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});
