import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

class Header extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     loggedIn: true,
  //   };
  // }

  // componentDidMount() {
  //   this.checkUser();
  // }

  // checkUser = () => {
  //   const { email } = this.props;
  //   if (!email) {
  //     this.setState({ loggedIn: false });
  //   }
  // };

  render() {
    // const { loggedIn } = this.state;
    const { email } = this.props;
    // if (!loggedIn) return <Redirect to="/" />;
    return (
      <div>
        Header
        <h3 data-testid="email-field">{email}</h3>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ email: state.user.email });

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
