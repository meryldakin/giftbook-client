import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Logout from "./Logout";
import { fetchFriends } from "../actions"
import Friends from "./Friends"
import { Route } from 'react-router'

class Container extends Component {

  componentDidMount(){

    this.props.fetchFriends()
  }


  render() {
    return (
      <div>
        <h1>Main Container: U r home</h1>
        <Logout history={this.props.history} />
        <Route exact path="/" component={Friends}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.users.current_user
  };
};

export default withRouter(connect(mapStateToProps, {fetchFriends})(Container));
