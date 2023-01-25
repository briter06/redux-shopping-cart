import 'jest-canvas-mock';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './main';
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

test('renders main screen', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Add a product/i);
  expect(linkElement).toBeInTheDocument();
});
