import React from 'react'
import { connect } from "react-redux"
import { setSelectedFriend } from "../actions"
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const Friends = props => {

  const selectFriend = (friendId) => {
    props.setSelectedFriend(friendId)
  }
  console.log(props)
  const friends = props.friends.map( friend => {
    return (<ListGroupItem key={friend.firstName} onClick={() => selectFriend(friend.id)}>{friend.firstName}</ListGroupItem>)
  })
  return (
    <div>
      <h1>Friends</h1>
      <ListGroup>
        {friends}
      </ListGroup>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends.list
  }
}

export default connect(mapStateToProps, {setSelectedFriend})(Friends)
