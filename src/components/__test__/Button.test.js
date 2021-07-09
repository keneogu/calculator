import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

test('should render the button component', () => {
  render(<Button name="4" />);
  const btn = screen.getByTestId('button');
  expect(btn.textContent).toBe('4');
});
