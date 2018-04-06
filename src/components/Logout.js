import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

const Logout = props => {
  const handleLogout = () => {
    props.logoutUser();
  };
  return <button onClick={handleLogout}> Logout </button>;
};

export default connect(null, { logoutUser })(Logout);
