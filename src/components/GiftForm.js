import React from 'react'
import { connect } from 'react-redux'
import { saveGift } from "../actions"

class GiftForm extends React.Component {

  state = {
    description: "",
    occasion: "",
    bought: "",
    year: "2018",
    id: ""

  }

  componentDidMount(){
    if(this.props.gift){
      const occasion =  this.props.gift.occasion ? this.props.gift.occasion.name : ""
      this.setState({
        description: this.props.gift.description,
        occasion: occasion,
        bought: this.props.gift.bought || false,
        year: this.props.gift.year || "",
        id: this.props.gift.id
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
    this.props.saveGift(this.state)
    this.props.toggleEdit ?
    this.props.toggleEdit() :
    this.setState({
      description: "",
      occasion: "",
      bought: "",
      year: "",
      id: ""
    })

  }

  render(){
    console.log(this.state)
    return(
      <tr>
        <td>
          <input type="text" name="description" placeholder="Gift Description" value={this.state.description} onChange={this.handleChange}/>
        </td>
        <td>
          <input type="checkbox" checked={this.state.bought} name="bought" onChange={this.handleChange}/>
        </td>
        <td>
          <select value={this.state.occasion} name="occasion" onChange={this.handleChange}>
            <option>Birthday</option>
            <option>Christmas</option>
            <option>Mother's Day</option>
            <option>Father's Day</option>
            <option>Valentine's Day</option>
            <option>Anniversary</option>
          </select>
        </td>
        <td>
          <input type="number" name="year" placeholder="Year" min="1960" max="2100" value={this.state.year} onChange={this.handleChange}/>
        </td>
        <td>
          <button onClick={this.handleSave}>Save</button>
        </td>

      </tr>
    )
  }
}

export default connect(null, {saveGift})(GiftForm)
