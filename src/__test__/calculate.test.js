import calculate from '../logic/calculate';

describe('calculate', () => {
  test('clears the display when AC button is pressed', () => {
    const data = {
      total: '0',
      next: '',
      operation: '',
    };

    const newData = calculate(data, 'AC');
    expect(newData).toEqual(data);
  });
  test('display the multiplication operation when clicked', () => {
    const myCalculate = { total: 15, operation: 'x', next: '' };
    const data = calculate(myCalculate, 'x');
    expect(data.operation).toEqual('x');
  });
  test('should calculate output when "=" pressed', () => {
    const data = { total: 7, next: 5, operation: 'x' };
    const newData = calculate(data, '=');

    expect(newData.total).toEqual('35');
    expect(newData.next).toEqual('');
    expect(newData.operation).toEqual('=');
  });
  test('it negates the value of operand when the button is clicked', () => {
    const data = { total: '72', next: '', operation: '' };
    const newData = calculate(data, '+/-');
    expect(newData).toEqual({ total: '-72', next: '', operation: '' });
  })
});
