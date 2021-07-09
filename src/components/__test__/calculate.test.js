import calculate from '../../logic/calculate';

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
});