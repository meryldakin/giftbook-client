import React from 'react'
import { connect } from "react-redux"
import { setSelectedFriend } from "../actions"


const Friends = props => {

  const selectFriend = (friendId) => {
    props.setSelectedFriend(friendId)
  }
  console.log(props)
  const friends = props.friends.map( friend => {
    return (<li key={friend.firstName} onClick={() => selectFriend(friend.id)}>{friend.firstName}</li>)
  })
  return (
    <div>
      <h1>Friend List</h1>
      <ul>
        {friends}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends.list
  }
}

export default connect(mapStateToProps, {setSelectedFriend})(Friends)
