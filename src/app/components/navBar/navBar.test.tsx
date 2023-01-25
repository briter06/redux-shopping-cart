import 'jest-canvas-mock';
import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './navBar';
import { RootState } from '../../redux/store';
import { generateInitialState as mockState } from '../../redux/rootReducer';

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
      ...ActualReactRedux,
      useSelector: (selected: (state: RootState)=> any) => selected({
        root: mockState()
      }),
      useDispatch: () => {},
  };
});

test('renders shopping cart', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/Shopping Cart/i);
  expect(linkElement).toBeInTheDocument();
});
