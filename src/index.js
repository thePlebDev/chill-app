import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import chillReducer from './Redux/Reducers/MainReducer.js';
import showPositionChill from './GeoLocationAPI/GAPI';


if (navigator.geolocation){
// I should probably turn this into a function and put it into another file.....
    navigator.geolocation.getCurrentPosition(showPositionChill) // I need to wait for this
    // when getCurrentPosition gets called it becomes an asynchronous request.
}else{
    console.log('before async call')

}



const store = createStore(
    chillReducer,
    applyMiddleware(thunk)
)

//will put in the custom logger after the I get the normal one working first


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router >
  </Provider>,
  document.getElementById('root'))
