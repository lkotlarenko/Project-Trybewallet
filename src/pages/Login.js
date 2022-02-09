import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <input
          type="text"
          onChange={ this.handleChange }
          name="email"
          placeholder="ex: email@mail.com"
          value={ email }
        />
        <input
          type="password"
          onChange={ this.handleChange }
          name="password"
          value={ password }
        />
      </section>
    );
  }
}

export default Login;
