import operate from '../../logic/operate';

test('should add,divide,multiply,subtract and percentage of two numbers', () => {
	const add = operate('5', '6', '+');
	const minus = operate('10', '3', '-');
	const times = operate('5', '10', 'x');
	const divide = operate('5', '10', '÷');
	const percent = operate('100', '10', '%');
	expect(add).toEqual('11');
	expect(minus).toEqual('7');
	expect(times).toEqual('50');
	expect(divide).toEqual('0.5');
	expect(percent).toEqual('10');
});