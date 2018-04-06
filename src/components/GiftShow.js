import React from "react"
import GiftForm from './GiftForm'
import { Button } from 'react-bootstrap'

class GiftShow extends React.Component {

  state = {
    edit: false
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

    render(){
      if(!this.state.edit){
        return (
          <tr>
            <td>{this.props.gift.description}</td>
            <td>{this.props.gift.bought ? "Bought" : null}</td>
            <td>{this.props.gift.occasion ? this.props.gift.occasion.name : null}</td>
            <td>{this.props.gift.year ? this.props.gift.year : null}</td>
            <td><Button onClick={this.toggleEdit}><i className="fas fa-edit"></i></Button></td>

          </tr>
        )
      } else {
        return <GiftForm toggleEdit={this.toggleEdit} gift={this.props.gift}/>
      }
    }
}
export default GiftShow
