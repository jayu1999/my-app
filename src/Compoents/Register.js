import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 class="text-center mb-3">
              <i class="fas fa-user-plus"></i> Register </h1>
               
        <form action="/users/register" method="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            class="form-control"
            placeholder="Enter Name"
            />
          </div>
        </form>
        </div>
        </div>
      </div>
    );
  }
}
