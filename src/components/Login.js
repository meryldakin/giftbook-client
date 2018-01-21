import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/index";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import Container from "./Container";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  userLoggedIn = () => {
    return !!localStorage.getItem("token");
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state, this.props.history);
  };

  render() {
    if (!!localStorage.getItem("token") && !!this.props.loggedIn) {
      console.log("login", this.props);
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input type="text" id="email" onChange={this.handleChange} />
          <label>Password:</label>
          <input type="password" id="password" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.users.current_user,
    loggedIn: state.users.loggedIn
  };
};

export default withRouter(connect(mapStateToProps, { loginUser })(Login));
