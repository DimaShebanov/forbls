import React from "react";
import {Route, Redirect} from "react-router";
import {connect} from "react-redux";

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);

        console.log("construct");
    }

    render() {
        const {component: Component, ...rest} = this.props,
            {authorized} = rest;

        return (
            <Route
                {...rest}
                render={props =>
                    authorized ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {from: props.location},
                            }}
                        />
                    )
                }
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        authorized: state.auth.authorized,
    };
}

export default connect(
    mapStateToProps,
    null,
    null,
    {pure: false}
)(PrivateRoute);
