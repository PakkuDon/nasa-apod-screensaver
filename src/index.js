import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.css';

import App from './containers/App';
import './index.css';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
