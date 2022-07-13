import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <form>
        <h3 style={{ paddingLeft: "7em", marginTop: "1em" }}>Register </h3>
        <div className="w-50 p-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="w-50 p-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="w-50 p-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="w-50 p-3">
          <label>Password</label>
          <input
            style={{ marginBottom: "0.9em" }}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up{" "}
            </button>
          </div>
          <p className="forgot-password text-right ">
            Already registered <a href="/Login">sign in?</a>
          </p>
        </div>
      </form>
    );
  }
}
