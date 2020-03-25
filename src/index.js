import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import chillReducer from './Redux/Reducers/MainReducer.js';

const store = createStore(chillReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router >
  </Provider>,
  document.getElementById('root'))
