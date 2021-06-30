import operate from './operate';

function calculate(calculator, buttonName) {
  let {total,next,operation} = calculator;
  
  if (buttonName === '+/-') {
	total *= -1;
	next *= -1;
  }else if (button === '+' || button === '-' || button === 'X' || button === '%' || button === '÷') {
	total = operate(total,next,operation);
  }else if (buttonName === 'AC') {
    total = '0';
    next = '';
    operation = '';
  }
  return {total,next,operation};
}

export default calculate;