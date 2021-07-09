import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonPanel from '../ButtonPanel';

test('should render button components with no error', () => {
  const { getByTestId } = render(<ButtonPanel />);
  const btnPan = getByTestId('button-panel');

  expect(btnPan).toHaveTextContent('+');
  expect(btnPan).toHaveTextContent('6');
  expect(btnPan).toHaveTextContent('-');
});
