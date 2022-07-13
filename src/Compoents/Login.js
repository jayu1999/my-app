import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 class="text-center mb-3">
              <i class="fas fa-sign-in-alt"></i> Login
            </h1>

            <form action="/users/login" method="POST">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter Email"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
