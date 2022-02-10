import React from 'react';
import PropTypes from 'prop-types';

class SelectionField extends React.Component {
  render() {
    const { name, testid, value, type, onChange, options } = this.props;
    return (
      <label htmlFor={ testid } style={ { textTransform: 'capitalize' } }>
        {name}
        <select
          id={ testid }
          name={ name }
          data-testid={ testid }
          value={ value }
          type={ type }
          onChange={ onChange }
        >
          {options.map((option) => (
            <option value={ option } key={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectionField.propTypes = {
  name: PropTypes.string,
  testid: PropTypes.string,
  value: PropTypes.number,
  type: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default SelectionField;
