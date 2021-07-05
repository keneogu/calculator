import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const renderButton = (i) => <Button name={i} handleClick={clickHandler} />;
  return (
    <div className="btn-panel">
      <div className="inner-panel">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('÷')}
      </div>
      <div className="inner-panel">
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('x')}
      </div>
      <div className="inner-panel">
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
      </div>
      <div className="inner-panel">
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
      </div>
      <div className="inner-panel">
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
