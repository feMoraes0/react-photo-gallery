/* eslint-disable no-undef */
import { act, render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App component', () => {
  it('Given a component rendered, when a h1 is found, then should have text content with application title', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue([]),
    } as unknown as Response);
    // GIVEN
    await act(() => {
      render(<App />);
    });
    // WHEN
    const appTitle = screen.getByRole('heading', { level: 1 });
    // THEN
    expect(appTitle).toHaveTextContent('Unsplash Gallery');
  });
});
