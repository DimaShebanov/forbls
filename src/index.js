import React from "react";
import ReactDOM from "react-dom";

import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";

import PrivateRoute from "./components/PrivateRoute";
import {Router, Route as PublicRoute, browserHistory} from "react-router";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";

import {composeWithDevTools} from "redux-devtools-extension";

import reducers from "./reducers";
import routes from "./routes";

const store = createStore(
        combineReducers({
            ...reducers,
            routing: routerReducer,
        }),
        composeWithDevTools()
    ),
    history = syncHistoryWithStore(browserHistory, store);
console.log(PrivateRoute)
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes.map(({isPrivate, ...props}) => React.createElement(isPrivate ? PrivateRoute : PublicRoute, props))}
        </Router>
    </Provider>,
    document.getElementById("app")
);
