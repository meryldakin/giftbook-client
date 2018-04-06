import React, { Component } from "react";
import "./App.css";
// Add REDUX
import { connect } from "react-redux";
//import files
import Login from "./components/Login";
import Container from "./components/Container";
import Loading from "./components/Loading";
//import actions
import * as actions from "./actions/index";

class App extends Component {
  componentWillMount() {
    if (localStorage.getItem("token") && !this.props.current_user) {
      this.props.getCurrentUser();
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else if (this.props.loggedIn) {
        return (
          <div className="App">
            <Container/>
          </div>
        )
    } else {
      return <Login />
    }
  }
}

const mapStateToProps = state => {
  console.log("APP STATE", state);
  return {
    loggedIn: state.users.loggedIn,
    loading: state.users.loading,
    current_user: state.users.current_user
  };
};

export default connect(mapStateToProps, actions)(App);
