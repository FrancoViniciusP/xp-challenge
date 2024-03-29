import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import Reset from './styles/global';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(

  <BrowserRouter>
    <Provider store={store}>
      <Reset />
      <App />
    </Provider>
  </BrowserRouter>,
);
