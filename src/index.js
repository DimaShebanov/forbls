import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/application';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(

);



ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
