import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputField from './InputField';
import SelectionField from './SelectionField';
import { addExpenses } from '../actions';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'BTC',
  method: 'Dinheiro',
  tag: 'Lazer',
  isDisabled: true,
};

class ExpenseCreator extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  verifyInputs = () => {
    const { value, description } = this.state;
    if (value >= 1 && description.length >= 1) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
      this.verifyInputs,
    );
  };

  handleSubmit = () => {
    const { value, description, currency, method, tag } = this.state;
    const { addExpense, expenses } = this.props;
    const newExpense = { id: expenses.length, value, description, currency, method, tag };
    addExpense(newExpense);
    this.setState(INITIAL_STATE);
  };

  render() {
    const { value, description, currency, method, tag, isDisabled } = this.state;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagList = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;

    return (
      <form>
        <h2>Trybe Wallet</h2>
        <InputField
          name="value"
          testid="value-input"
          value={ value }
          type="number"
          onChange={ this.handleChange }
        />
        <InputField
          name="description"
          testid="description-input"
          value={ description }
          type="text"
          onChange={ this.handleChange }
        />
        <SelectionField
          name="currency"
          testid="currency-input"
          value={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <SelectionField
          name="method"
          testid="method-input"
          value={ method }
          options={ paymentMethods }
          onChange={ this.handleChange }
        />
        <SelectionField
          name="tag"
          testid="tag-input"
          value={ tag }
          options={ tagList }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.handleSubmit } disabled={ isDisabled }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenses(expense)),
});

ExpenseCreator.propTypes = {
  getEmail: PropTypes.arrayOf(PropTypes.string),
  addExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseCreator);
