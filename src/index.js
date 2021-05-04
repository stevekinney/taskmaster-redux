import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { Items } from './components/Items';
import { store } from './store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Items />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
