/* eslint-disable no-undef */
import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import App from './pages/App';

describe('Entry point file', () => {
  it('Should render app element', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);

    const renderFunction:Root = {
      render: jest.fn(),
      unmount: jest.fn(),
    };
    jest.spyOn(ReactDOM, 'createRoot').mockReturnValue(renderFunction);

    // eslint-disable-next-line global-require
    require('./index.tsx');

    expect(ReactDOM.createRoot).toHaveBeenCalledTimes(1);
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(
      document.getElementById('root'),
    );
    expect(renderFunction.render).toHaveBeenCalledTimes(1);
    expect(renderFunction.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });
});
