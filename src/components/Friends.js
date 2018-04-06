import React from 'react'
import { connect } from "react-redux"

const Friends = props => {

  const friends = props.friends.map( friend => {
    return (<li key={friend.firstName}>{friend.firstName}</li>)
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

export default connect(mapStateToProps)(Friends)
