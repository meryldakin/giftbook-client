import React, { Component } from "react";
import { connect } from "react-redux";
import Logout from "./Logout";
import { fetchFriends } from "../actions"
import Friends from "./Friends"
import FriendGifts from "./FriendGifts"


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
        {this.props.selectedFriend.id ?
          <FriendGifts/> :
        null }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.users.current_user,
    selectedFriend: state.friends.selectedFriend
  };
};

export default connect(mapStateToProps, {fetchFriends})(Container);
