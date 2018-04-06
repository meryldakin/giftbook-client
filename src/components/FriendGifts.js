import React from 'react'
import { connect } from "react-redux"
import GiftForm from "./GiftForm"
import GiftShow from "./GiftShow"
import GiftList from "./GiftList"
import {Table} from "react-bootstrap"
import {FormControl} from "react-bootstrap"


class FriendGifts extends React.Component {

  state = {
    sortBySelector: "",
    filterSelector: {
      selector: "",
      text: ""
    }
  }

  sortGiftsBy = selector => {
    console.log(selector)
    this.setState({
      sortBySelector: selector
    })
  }

  handleFilterChange = e => {
    this.setState({
      ...this.state,
      filterSelector: {
        ...this.state.filterSelector,
        selector: e.target.name,
        text: e.target.value
      }
    }, console.log)
  }


  render(){
    console.log(this.state)
    return (
      <div>
        <h2>{this.props.selectedFriend.firstName} {this.props.selectedFriend.lastName}</h2>
        <h3> Birthday: {this.props.selectedFriend.birthday}</h3>
        <Table responsive>
          <thead>
            <tr>
              <th><a href="#" onClick={() => this.sortGiftsBy("description")} >Gift</a></th>
              <th><a href="#" onClick={() => this.sortGiftsBy("bought")} >Bought? </a></th>
              <th><a href="#" onClick={() => this.sortGiftsBy("occasion")} >Occasion</a></th>
              <th><a href="#" onClick={() => this.sortGiftsBy("year")} >Year</a></th>
            </tr>
          </thead>
          <tbody>
            <GiftForm/>
            <GiftList gifts={this.props.gifts} sortBySelector={this.state.sortBySelector} filterSelector={this.state.filterSelector}/>
          </tbody>
          </Table >
      </div>
    )
  }
}

const mapStateToProps = state => {
  const gifts = state.gifts.list
  .sort( (a,b) => b.description < a.description )
  return {
    gifts: gifts,
    selectedFriend: state.friends.selectedFriend
  }
}

export default connect(mapStateToProps)(FriendGifts)

//
// <tr>
//   <td>
//     <FormControl type="text" placeholder="filter descriptions" name="description" onChange={this.handleFilterChange}/>
//   </td>
//
// </tr>
