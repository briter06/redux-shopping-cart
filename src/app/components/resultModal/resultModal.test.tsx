import 'jest-canvas-mock';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultModal from './resultModal';

test('renders learn react link', () => {
  render(<ResultModal open={true} title={''} >
    <p>Test</p>
  </ResultModal>);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
