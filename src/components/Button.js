import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => (
  <button type="button" style={{ height: '30px', width: '50px' }} onClick={() => handleClick(name)}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
