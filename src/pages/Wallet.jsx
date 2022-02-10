import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ExpenseCreator from '../components/ExpenseCreator';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    this.getCurrenciesData();
  }

  getCurrenciesData = () => {
    const { getCurrencies } = this.props;
    getCurrencies();
  };

  render() {
    return (
      <>
        <Header />
        <div>TrybeWallet</div>
        <ExpenseCreator />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
