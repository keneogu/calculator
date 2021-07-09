import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

test('should conatin the organization name', () => {
  const { getByTestId } = render(<Router><Navbar /></Router>);
  const nameElement = getByTestId('name');

  expect(nameElement).toHaveTextContent('Math Magician');
});

test('it should contain the links', () => {
  const { getByTestId } = render(<Router><Navbar /></Router>);

  expect(getByTestId('navbar')).toHaveTextContent('Home');
  expect(getByTestId('navbar')).toHaveTextContent('Calculator');
  expect(getByTestId('navbar')).toHaveTextContent('Quote');
});
