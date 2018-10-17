import React from "react";
import {Route, Redirect} from "react-router";
import {connect} from "react-redux";

class PrivateRoute extends React.Component {
    render() {
        return this.props.authorized ? <Route {...this.props} /> : <Redirect to="/login" />;
    }
}

export default connect(state => ({
    authorized: state.user.authorized,
}))(PrivateRoute);
