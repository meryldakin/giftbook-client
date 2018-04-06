import React from 'react'
import {connect} from "react-redux"
import {setSelectedFriend} from '../actions'
import { Table } from "react-bootstrap"

class OccasionShow  extends React.Component {

  render(){
    console.log("occasion show", this.props)
    const giftList = this.props.gifts.map(gift => {
      return (<tr>
        <td><a href="#" onClick={() => this.props.setSelectedFriend(gift.friend.id)}>{gift.friend.first_name}</a></td>
        <td>{gift.description}</td>
        <td>{gift.bought ? "Bought" : ""}</td>
        <td>{gift.year}</td>
      </tr>)
    })


    return (
      <div>
        <h2>{this.props.selectedOccasion.name} Gifts</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Friend</th>
              <th>Gift</th>
              <th>Bought</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {giftList}
          </tbody>
        </Table>

      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    gifts: state.gifts.list,
    selectedOccasion: state.occasions.selectedOccasion
  }
}

export default connect(mapStateToProps, {setSelectedFriend})(OccasionShow)
