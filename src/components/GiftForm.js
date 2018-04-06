import React from 'react'
import { connect } from 'react-redux'
import { saveGift } from "../actions"
import { FormControl, Checkbox, FormGroup , Button} from "react-bootstrap"

class GiftForm extends React.Component {

  state = {
    description: "",
    occasion: "",
    bought: "",
    year: "2018",
    gift_id: ""

  }

  componentDidMount(){
    if(this.props.gift){
      const occasion =  this.props.gift.occasion ? this.props.gift.occasion.name : ""
      this.setState({
        description: this.props.gift.description,
        occasion: occasion,
        bought: this.props.gift.bought || false,
        year: this.props.gift.year || "",
        gift_id: this.props.gift.id
      })
    }
  }

  handleChange = (event) => {
    if (event.target.name === "bought") {
      this.setState({
        bought: !this.state.bought
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

  }

  handleSave = (event) => {
    event.preventDefault()
    this.props.saveGift(this.state, this.props.selectedFriend.id)
    this.props.toggleEdit ?
    this.props.toggleEdit() :
    this.setState({
      description: "",
      occasion: "",
      bought: "",
      year: "2018",
      gift_id: ""
    })

  }

  render(){
    console.log(this.props)
    return(
      <tr>
        <td>
          <FormControl type="text" name="description" placeholder="Gift Description" value={this.state.description} onChange={this.handleChange}/>
        </td>
        <td>
          <Checkbox type="checkbox" checked={this.state.bought} name="bought" onChange={this.handleChange}/>
        </td>
        <td>
          <FormGroup controlId="formControlsSelect">

            <FormControl componentClass="select" placeholder="select" value={this.state.occasion} name="occasion" onChange={this.handleChange}>
              <option>Select occasion</option>
              <option>Birthday</option>
              <option>Christmas</option>
              <option>Mother's Day</option>
              <option>Father's Day</option>
              <option>Valentine's Day</option>
              <option>Anniversary</option>
            </FormControl>
          </FormGroup>

        </td>
        <td>
          <FormControl type="number" name="year" placeholder="Year" min="1960" max="2100" value={this.state.year} onChange={this.handleChange}/>
        </td>
        <td>
          <Button onClick={this.handleSave}><i className="fas fa-save"></i></Button>
        </td>

      </tr>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedFriend: state.friends.selectedFriend
  }
}

export default connect(mapStateToProps, {saveGift})(GiftForm)
