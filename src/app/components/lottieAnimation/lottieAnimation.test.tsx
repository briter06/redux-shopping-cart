import React from 'react';
import { render, screen } from '@testing-library/react';
import LottieAnimation, { LottieAnimationsIds } from './lottieAnimation';
import * as Lottie from 'lottie-react';

test('renders learn react link', () => {
  const useLottieSpy = jest.spyOn(Lottie, "useLottie");
  useLottieSpy.mockImplementation((props: any, style?: any) => ({View: <p></p>} as any));
  render(<LottieAnimation animationId={LottieAnimationsIds.GREEN_CHECK} loop={false}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
