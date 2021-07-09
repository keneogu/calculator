import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import App from '../App';

test('renders the App with no issue', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
