import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case 'AC':
      total = '0';
      next = '';
      operation = '';
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (operation === '=' || (total === '0' && operation === '')) {
        total = buttonName;
        operation = '';
      } else if (operation === '') {
        if (buttonName === '.' && total.includes('.')) {
          break;
        }
        total += buttonName;
      } else {
        if (buttonName === '.' && next.includes('.')) {
          break;
        }
        next += buttonName;
      }
      break;
    case '-':
    case '+':
    case 'x':
    case '÷':
      if (next !== '') {
        total = operate(total, next, operation);
        next = '';
      }
      operation = buttonName;
      break;
    case '%':
      if (operation === '' || operation === '=') {
        total = operate(total, 1, '%');
      } else {
        next = operate(next, total, '%');
      }
      break;
    case '+/-':
      if (operation === '' || operation === '=') {
        total = operate(total, 1, '+/-');
      } else {
        next = operate(next, 1, '+/-');
      }
      break;
    case '=':
      total = operate(total, next, operation);
      next = '';
      operation = '=';
      break;
    default:
      break;
  }
  return { total, next, operation };
};

export default calculate;
