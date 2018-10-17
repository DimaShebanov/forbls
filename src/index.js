import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers";

const store = createStore(
        combineReducers({
            ...reducers,
            routing: routerReducer,
        }),
        composeWithDevTools()
    ),
    history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
        </Router>
    </Provider>,
    document.getElementById("app")
);
