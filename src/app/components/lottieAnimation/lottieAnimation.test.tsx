import 'jest-canvas-mock';
import React from 'react';
import { render, screen } from '@testing-library/react';
import LottieAnimation, { LottieAnimationsIds } from './lottieAnimation';

test('renders lottie animation', () => {
  render(<LottieAnimation animationId={LottieAnimationsIds.GREEN_CHECK} loop={false}/>);
  expect(screen).toBeDefined();
});
