import 'jest-canvas-mock';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCartDrawer from './shoppingCartDrawer';
import { RootState } from '../../redux/store';
import { generateInitialState as mockState } from '../../redux/rootReducer';

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
      ...ActualReactRedux,
      useSelector: (selected: (state: RootState)=> any) => {
        const mockS = mockState()
        mockS.shoppingCart.drawerOpened = true
        return selected({
          root: mockS
        })
      },
      useDispatch: () => {},
  };
});

test('renders Shopping Cart', () => {
  render(<ShoppingCartDrawer/>);
  const linkElement = screen.getByText(/Shopping Cart/i);
  expect(linkElement).toBeInTheDocument();
});
