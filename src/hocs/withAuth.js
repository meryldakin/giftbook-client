import React from "react";
import { Redirect } from "react-router-dom";

const withAuth = WrappedComponent => {
  return class extends React.Component {
    render() {
      console.log(
        "render AuthedContainer",
        "sending to container?",
        this.props.loggedIn
      );
      return this.props.loggedIn
        ? <WrappedComponent {...this.props} />
        : <Redirect to="/login" />;
    }
  };
};

export default withAuth;
