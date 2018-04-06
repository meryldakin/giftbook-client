import React from "react";



const withAuth = WrappedComponent => {
  return class extends React.Component {
    render() {
      console.log(
        "render AuthedContainer",
        "sending to container?",
        this.props
      );
      return <WrappedComponent {...this.props} />
    }
  };
};

export default withAuth;
