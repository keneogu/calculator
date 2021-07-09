import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Button = ({
  name, handleClick, wide, color,
}) => {
  let classNameValue = 'btn';
  classNameValue = color === 'primary' ? `${classNameValue} primary` : `${classNameValue} secondary`;
  classNameValue = wide ? `${classNameValue} wide` : classNameValue;
  return (
    <button type="button" data-testid="button" className={classNameValue} onClick={() => handleClick(name)}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
