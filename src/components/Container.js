import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../actions"
import Friends from "./Friends"
import FriendGifts from "./FriendGifts"
import OccasionShow from "./OccasionShow"
import Navigation from "./Navigation"
import { Grid, Row, Col, Well } from 'react-bootstrap'

class Container extends Component {

  componentDidMount(){

    this.props.fetchFriends()
  }


  render() {
    return (
      <div>


        <Navigation/>
        <Grid>
          <Row>
            <Col xs={3} md={4}>
              <Well>
                <Row>
                  <Friends/>
                </Row>
              </Well>
            </Col>
            <Col xs={9} md={8}>
              {this.props.selectedOccasion.id ?
                <OccasionShow selectedOccasion={this.props.selectedOccasion}/> :
              null }
              {this.props.selectedFriend.id ?
                <FriendGifts/> :
              null }
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.users.current_user,
    selectedFriend: state.friends.selectedFriend,
    selectedOccasion: state.occasions.selectedOccasion
  };
};

export default connect(mapStateToProps, {fetchFriends})(Container);
