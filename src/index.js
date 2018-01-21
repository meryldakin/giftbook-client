import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// REDUX
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers/root.js";

//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

// Thunk Setup
const middleware = [thunk];

// Creating Store
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
