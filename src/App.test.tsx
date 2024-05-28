/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders main page', () => {
  render(
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  );
  const Element = screen.getByText(/Документы/i);
  expect(Element).toBeInTheDocument();
});
