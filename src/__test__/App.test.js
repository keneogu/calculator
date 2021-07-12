import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

test('renders the App with no issue', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
