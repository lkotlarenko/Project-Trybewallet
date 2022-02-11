import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateExpenses } from '../actions';

class ExpensesTable extends React.Component {
  currencyCalc = (rates, currency) => Number(rates[currency].ask);

  getCurrencyName = (rates, currency) => rates[currency].name.split('/')[0];

  deleteExpense = ({ target }) => {
    const { expenses, newList } = this.props;
    const idToRemove = Number(target.id);
    const filteredList = expenses.filter(({ id }) => id !== idToRemove);
    newList(filteredList);
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(
            ({ description, tag, method, currency, exchangeRates: rates, value, id }) => (
              <tr key={ id }>
                <td>{Number(value).toFixed(2)}</td>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{this.getCurrencyName(rates, currency)}</td>
                <td>{this.currencyCalc(rates, currency).toFixed(2)}</td>
                <td>{(value * this.currencyCalc(rates, currency)).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    onClick={ (event) => this.deleteExpense(event) }
                    data-testid="delete-btn"
                    id={ id }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newList: (expenses) => dispatch(updateExpenses(expenses)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  newList: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
