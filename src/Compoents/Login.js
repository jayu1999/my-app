import React, { Component } from "react";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state ={
      email:"",
      password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const { email,password }=this.state;
    console.log(email,password);
    fetch("http://localhost:5000/login-user",{
    method:"POST",
    crossDomain:True;
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      email,
      password,
    }),
   })
    .then((res)=> res.json())
    .then((data) =>{
      console.log(data ,"userRegister");
      if(data.status == 'ok'){
        alert("login successful")
        window.localStoarge.setItem("token",data.data);
        window.location.href ="./userDetails";
      }
    });

  }
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt"></i> Login
            </h1>

            <form action="/users/login" method="POST">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  onChange={(e) => this.setState({password:e.target.value})}

                />
              </div>
              <div className="form-group" style={{ marginTop: "0.7em" }}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={(e) => this.setState({password:e.target.value})}

                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ marginTop: "0.7em" }}
              >
                Login{" "}
              </button>
            </form>
            <p
              className="forgot-password text-right"
              style={{ marginTop: "0.9em" }}>
              register here <a href="/Register">sign up?</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
