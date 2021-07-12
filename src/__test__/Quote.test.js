import renderer from 'react-test-renderer';
import React from 'react';
import Quote from '../components/Quote';

it('matches the Quote snapshot', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
