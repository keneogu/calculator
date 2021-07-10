import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';

test('should have a greeting text', () => {
  const { getByTestId } = render(<Home />);
  const greetElement = getByTestId('h-text');

  expect(greetElement.textContent).toBe('Welcome to the Home Page');
});

test('matches the home snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();

  expect(tree).toMatchSnapshot();
});
