import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";
import medlogo from "../assets/images/logo.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false,
    };
  }

  inputHandler = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginHandler = (e) => {
    e.preventDefault();
    console.log("Handle login!");
  };

  render() {
    return (
      <div className="page login-page">
        <div className="logo">
          <img className="logo-picture" src={medlogo} alt="logo"></img>
        </div>
        <div className="login-container">
          <div className="login-form">
            <p className="banner">Te rugăm să introduci datele</p>
            <input
              onChange={this.inputHandler}
              type={"text"}
              placeholder={"Cod"}
            />
            <input
              onChange={this.inputHandler}
              type={"password"}
              placeholder={"Parolă"}
            />
            <button onClick={this.loginHandler}>AUTENTIFICARE</button>
            <p className="forgot-pass">Mi-am uitat parola!</p>
          </div>
          <button className="back-button">Mergi inapoi</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
