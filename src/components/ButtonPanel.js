import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const renderButton = ({ name, color = 'primary', wide = false }) => <Button name={name} handleClick={clickHandler} color={color} wide={wide} />;
  return (
    <div className="btn-panel" data-testid="button-panel">
      <div className="inner-panel">
        {renderButton({ name: 'AC' })}
        {renderButton({ name: '+/-' })}
        {renderButton({ name: '%' })}
        {renderButton({ name: '÷', color: 'secondary' })}
      </div>
      <div className="inner-panel">
        {renderButton({ name: '7' })}
        {renderButton({ name: '8' })}
        {renderButton({ name: '9' })}
        {renderButton({ name: 'x', color: 'secondary' })}
      </div>
      <div className="inner-panel">
        {renderButton({ name: '4' })}
        {renderButton({ name: '5' })}
        {renderButton({ name: '6' })}
        {renderButton({ name: '-', color: 'secondary' })}
      </div>
      <div className="inner-panel">
        {renderButton({ name: '1' })}
        {renderButton({ name: '2' })}
        {renderButton({ name: '3' })}
        {renderButton({ name: '+', color: 'secondary' })}
      </div>
      <div className="inner-panel">
        {renderButton({ name: '0', wide: true })}
        {renderButton({ name: '.' })}
        {renderButton({ name: '=', color: 'secondary' })}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
