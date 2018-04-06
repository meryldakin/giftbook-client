import React from 'react'
import { connect } from "react-redux"
import { fetchGifts } from "../actions"

class Gifts extends React.Component{

  const gifts = props.gifts.map( gift => {
    return (<li key={gift.description}> {gift.description} </li>)
  })

  componentDidMount(){
    this.props.fetchGifts()
  }

  render(){
    return (
      <div>
        <h1>Gifts</h1>
        <ul>
          {gifts}
        </ul>
      </div>
    )
  }
  }

const mapStateToProps = (state) => {
  return {
    gifts: state.gifts.list
  }
}

export default connect(mapStateToProps, {fetchGifts})(Gifts)
