import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';

import configureStore from './store';
const data = window._INITIAL_DATA_;

hydrate(
  <Provider store={configureStore}>
    <BrowserRouter>
    <App routes={routes} initialData={data} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
