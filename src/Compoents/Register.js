import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
        <form>
        <h3>Sign Up</h3>
        <div className="w-50 p-3 mx-auto ">
          <label style={{marginBottom:"0.5em"}}>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
          </div>
        <div className="w-50 p-3 mx-auto">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="w-50 p-3 mx-auto">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
          </form>
    );
  }
}
