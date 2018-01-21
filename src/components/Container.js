import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Logout from "./Logout";

class Container extends Component {
  render() {
    return (
      <div>
        <h1>Main Container: U r home</h1>
        <Logout history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.users.current_user
  };
};

export default withRouter(connect(mapStateToProps)(Container));
