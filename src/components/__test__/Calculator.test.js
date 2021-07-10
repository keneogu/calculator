import renderer from 'react-test-renderer';
import React from 'react';
import Calculator from '../Calculator';

it('matches the Calculator snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
