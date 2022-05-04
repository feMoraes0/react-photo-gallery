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

  it('Given a component rendered, when API returns an element, then should image rendered have returned element properties', async () => {
    const response = [
      {
        id: '1',
        urls: {
          raw: 'http://localhost/image-1',
        },
        description: 'any description',
      },
    ];
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(response),
    } as unknown as Response);
    // GIVEN
    await act(() => {
      render(<App />);
    });
    // WHEN
    const image = screen.getByRole('img');
    // THEN
    expect(image).toHaveProperty('src', response[0].urls.raw);
    expect(image).toHaveProperty('alt', response[0].description);
  });

  it('Given a component rendered, when API returns multiple elements, then should find the same number of images', async () => {
    const response = [
      {
        id: '1',
        urls: {
          raw: 'http://localhost/image-1',
        },
        description: 'any description',
      },
      {
        id: '2',
        urls: {
          raw: 'http://localhost/image-2',
        },
        description: 'any description 2',
      },
    ];
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(response),
    } as unknown as Response);
    // GIVEN
    await act(() => {
      render(<App />);
    });
    // WHEN
    const images = screen.getAllByRole('img');
    // THEN
    expect(images.length).toBe(response.length);
  });
});
