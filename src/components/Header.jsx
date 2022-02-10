import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  updateTotal = () => {
    const { expenses } = this.props;
    return expenses
      .reduce((total, { value, exchangeRates, currency }) => {
        total += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
        return total;
      }, 0)
      .toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        Header
        <h3 data-testid="email-field">{email}</h3>
        <p data-testid="total-field">{this.updateTotal()}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps)(Header);
