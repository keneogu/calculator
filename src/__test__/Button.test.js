import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

test('should render the button component', () => {
  render(<Button name="4" wide color="green" handleClick={fireEvent.click} />);
  const btn = screen.getByTestId('button');
  expect(btn.textContent).toBe('4');
});
