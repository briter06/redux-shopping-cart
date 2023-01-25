import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCartDrawer from './shoppingCartDrawer';

test('renders learn react link', () => {
  render(<ShoppingCartDrawer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
