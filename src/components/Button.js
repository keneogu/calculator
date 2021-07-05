import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => (
  <button type="button" className="btn" onClick={() => handleClick(name)}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
