import React from "react";
import "./Login.css";
import medlogo from "../assets/images/logo.png";
import { Link, Navigate } from "react-router-dom";
import Notification from "../components/Notification";
import { Redirect } from "react-router/cjs/react-router.min";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
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

  redirectToHome = () => {
    this.props.history.push("/home");
  }

  loginHandler = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    if (this.state.code === "" || this.state.password === "") {
      this.setState({
        error: "Te rog sa introduci toate datele necesare!",
        loading: false,
      });
      setTimeout(() => {
        this.setState({
          error: "",
        });
      }, 4000);
    } else {
      setTimeout(() => {
        if (this.state.code === "12345" && this.state.password === "12345") {
          console.log("pushed route!");
          return <Navigate replace to="/"/>;
        } else {
          this.setState({
            error: "Cod sau parola gresita!",
            loading: false,
          });
          setTimeout(() => {
            this.setState({
              error: "",
            });
          }, 4000);
        }
      }, 2000);
    }
  };

  render() {
    return (
      <div className="page login-page">
        <Link className="logo" to="/">
          <img className="logo-picture" src={medlogo} alt="logo"></img>
        </Link>
        <div className="login-container">
          <div className="login-form">
            <p className="banner">Te rugăm să introduci datele</p>
            <input
              onChange={this.inputHandler}
              type={"text"}
              placeholder={"Cod"}
              name="code"
            />
            <input
              onChange={this.inputHandler}
              type={"password"}
              placeholder={"Parolă"}
              name="password"
            />
            <button onClick={this.loginHandler}>
              {this.state.loading ? (
                <div className="progress-bar">
                  <div className="circle border"></div>
                </div>
              ) : (
                <p>AUTENTIFICARE</p>
              )}
            </button>
            <p className="forgot-pass">Mi-am uitat parola!</p>
          </div>
          <Link className="back-button" to={"/"}>
            Mergi inapoi
          </Link>
          {this.state.error && (
            <Notification type="red" msg={this.state.error} />
          )}
        </div>
      </div>
    );
  }
}

export default Login;
