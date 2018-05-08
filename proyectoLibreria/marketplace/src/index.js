import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import store from './reducers';

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
