import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  render() {
    const { name, testid, value, type, onChange } = this.props;
    return (
      <label htmlFor={ testid } style={ { textTransform: 'capitalize' } }>
        {name}
        <input
          id={ testid }
          name={ name }
          data-testid={ testid }
          value={ value }
          type={ type }
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string,
  testid: PropTypes.string,
  value: PropTypes.number,
  type: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputField;
