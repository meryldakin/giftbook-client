import React, { Component } from "react";
import { connect } from "react-redux";
import Logout from "./Logout";
import { fetchFriends } from "../actions"
import Friends from "./Friends"


class Container extends Component {

  componentDidMount(){

    this.props.fetchFriends()
  }


  render() {
    return (
      <div>
        <h1>Main Container: U r home</h1>
        <Logout />
        <Friends/>
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
