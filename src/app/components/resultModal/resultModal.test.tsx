import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultModal from './resultModal';

test('renders learn react link', () => {
  render(<ResultModal />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
