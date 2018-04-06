import React from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { connect } from "react-redux"
import { selectOccasion, fetchOccasions } from '../actions'
import Logout from "./Logout";

class Navigation extends React.Component {
  componentDidMount(){
    this.props.fetchOccasions()
  }
  render(){
    const occasionsLI = this.props.occasions.map( occasion => {
      return (<MenuItem eventKey={occasion.id} onClick={() => this.props.selectOccasion(occasion.id)}>{occasion.name}</MenuItem>)
    })

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Giftbook</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown eventKey={3} title="Occasions" id="basic-nav-dropdown">
            {occasionsLI}
          </NavDropdown>

        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} >
            <Logout/>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
const mapStateToProps = state => {
  return {
    occasions: state.occasions.list,
    selectedOccasion: state.occasions.selectedOccasion
  }
}

export default connect(mapStateToProps, {selectOccasion, fetchOccasions})(Navigation)
