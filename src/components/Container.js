import React, { Component } from "react";
import { connect } from "react-redux";
import Logout from "./Logout";

class Container extends Component {
  render() {
    return (
      <div>
        <h1>Main Container: U r home</h1>
        <Logout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.users.current_user
  };
};

export default connect(mapStateToProps)(Container);
