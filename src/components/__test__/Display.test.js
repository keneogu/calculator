import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../Display';

test('Display the default output of 0', () => {
  const { getByTestId } = render(<Display />);
  expect(getByTestId('display')).toHaveTextContent('0');
});
