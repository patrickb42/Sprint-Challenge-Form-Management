import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import adder from './adder';


describe('testing default components rendered in <App />', () => {
  const { getByTestId } = render(<App />);

  it('renders without crashing', () => {
    expect(getByTestId(/^App$/)).toBeInTheDocument();
    expect(adder(2, 5)).toBe(7);
  });
})
