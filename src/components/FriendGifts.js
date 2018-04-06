import React from 'react'
import { connect } from "react-redux"
import GiftForm from "./GiftForm"
import GiftShow from "./GiftShow"


class FriendGifts extends React.Component {

  state = {
    sortedGifts: []
  }

  componentDidMount(){
    this.setState({
      sortedGifts: this.props.gifts
    })
  }

  sortGiftsBy = selector => {
    console.log(selector)
    // const namedSelector = ""
    // return (
    //   if (selector === "occasion"){
    //     namedSelector = "occasion.name"
    //   } else {
    //     namedSelector = selector
    //   }
    //   const gifts = this.props.gifts
    //   .sort( (a,b) => b[namedSelector] < a[namedSelector] )
    //   console.log(selector)
    //   this.setState({
    //     sortedGifts: gifts
    //   }, console.log)
    //   console.log(this.state)
    // )
  }


  render(){
    console.log(this.state)
    return (
      <div>
        Friend Gifts
        <table>
          <thead>
            <tr>
              <th onClick={() => this.sortGiftsBy("description")} >Gift Description</th>
              <th onClick={() => this.sortGiftsBy("bought")}>Bought?</th>
              <th onClick={() => this.sortGiftsBy("occasion")}>Occasion</th>
              <th onClick={() => this.sortGiftsBy("year")}>Year</th>
            </tr>
          </thead>
          <tbody>
            <GiftForm/>
            {this.props.gifts.map( gift => <GiftShow key={gift.id} gift={gift}/>)}

          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const gifts = state.gifts.list
  .sort( (a,b) => b.description < a.description )
  return {
    gifts: gifts
  }
}

export default connect(mapStateToProps)(FriendGifts)
